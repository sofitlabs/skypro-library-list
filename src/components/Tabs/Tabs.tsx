import { useCallback, useEffect, useState } from "react";
import "./Tabs.scss";

import { RootState, useAppSelector } from "../../store";
import { DataItemType } from "../../store/reducers/library";
import { TabItem } from "./TabItem";

export const Tabs = () => {
  const { data, sort, filter } = useAppSelector(
    (state: RootState) => state.library,
  );

  const [transformedData, setTransformedData] = useState<{
    [key: string]: DataItemType[];
  }>({});

  const [sorterNames, setSortedNames] = useState<string[]>([]);

  const transformData = useCallback(() => {
    let newData = data.reduce(
      (acc: { [key: string]: DataItemType[] }, item) => {
        const place = item.territory;
        if (
          typeof place === "string" &&
          place.toLowerCase().indexOf(filter.toLowerCase()) === -1
        ) {
          return acc;
        }
        if (place && !acc.hasOwnProperty(place)) {
          acc[place] = [];
        }
        acc[place].push(item);
        return acc;
      },
      {},
    );
    setTransformedData(newData);
  }, [data, filter]);

  const sortData = useCallback(() => {
    if (sort === "default") {
      setSortedNames(Object.keys(transformedData));
      return;
    }
    if (sort === "up") {
      setSortedNames(
        Object.keys(transformedData).sort((a, b) =>
          transformedData[a].length > transformedData[b].length
            ? -1
            : transformedData[a].length < transformedData[b].length
            ? 1
            : 0,
        ),
      );
      return;
    }
    if (sort === "down") {
      setSortedNames(
        Object.keys(transformedData).sort((a, b) =>
          transformedData[a].length > transformedData[b].length
            ? 1
            : transformedData[a].length < transformedData[b].length
            ? -1
            : 0,
        ),
      );
      return;
    }
  }, [sort, transformedData]);

  useEffect(() => {
    transformData();
  }, [transformData]);

  useEffect(() => {
    sortData();
  }, [sortData]);

  return (
    <div className="Tabs">
      {!!sorterNames.length &&
        sorterNames.map((place) => (
          <TabItem
            key={place}
            place={place}
            libraryList={transformedData[place]}
          />
        ))}
    </div>
  );
};
