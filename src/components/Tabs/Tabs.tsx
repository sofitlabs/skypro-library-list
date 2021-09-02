import { useCallback, useEffect, useState } from "react";
import "./Tabs.scss";

import { RootState, useAppSelector } from "../../store";
import { DataItemType } from "../../store/reducers/library";
import { TabItem } from "./TabItem";

type DataObjectType = { [key: string]: DataItemType[] };

const sortData = (data: DataObjectType, sort: string) => {
  if (sort === "up") {
    return Object.keys(data).sort((a, b) =>
      data[a].length > data[b].length
        ? -1
        : data[a].length < data[b].length
        ? 1
        : 0,
    );
  }
  if (sort === "down") {
    return Object.keys(data).sort((a, b) =>
      data[a].length > data[b].length
        ? 1
        : data[a].length < data[b].length
        ? -1
        : 0,
    );
  }
  return Object.keys(data);
};

export const Tabs = () => {
  const { data, sort, filter } = useAppSelector(
    (state: RootState) => state.library,
  );

  const [transformedData, setTransformedData] = useState<DataObjectType>({});

  const [sorterNames, setSortedNames] = useState<string[]>([]);

  const transformData = useCallback(() => {
    let newData = data.reduce((acc: DataObjectType, item) => {
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
    }, {});
    setSortedNames(sortData(newData, sort));
    setTransformedData(newData);
  }, [data, filter, sort]);

  useEffect(() => {
    transformData();
  }, [transformData]);

  return (
    <div className="Tabs">
      {sorterNames &&
        !!sorterNames.length &&
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
