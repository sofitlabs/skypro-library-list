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
    const newData = { ...transformedData };
    if (sort === "up") {
      return Object.keys(newData).sort((a, b) => (a > b ? 1 : -1));
    }
    if (sort === "down") {
      return Object.keys(newData).sort((a, b) => (a < b ? 1 : -1));
    }
    setTransformedData(newData);
  }, [sort, transformedData]);

  useEffect(() => {
    transformData();
  }, [transformData]);

  useEffect(() => {
    sortData();
  }, [sortData]);

  return (
    <div className="Tabs">
      {!!Object.keys(transformedData).length &&
        Object.keys(transformedData).map((place) => (
          <TabItem place={place} libraryList={transformedData[place]} />
        ))}
    </div>
  );
};
