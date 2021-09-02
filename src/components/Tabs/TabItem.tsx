import { useState } from "react";
import { DataItemType } from "../../store/reducers/library";

export const TabItem = ({
  place,
  libraryList,
}: {
  place: string;
  libraryList: DataItemType[];
}) => {
  const [isOpenLibrary, setOpenLibrary] = useState(false);

  return (
    <div className="Tabs__item Tab">
      <div
        className="Tab__label"
        onClick={() => setOpenLibrary(!isOpenLibrary)}
      >
        {place}
      </div>
      <div
        className={`Tab__library-list ${
          isOpenLibrary ? "Tab__library-list_opened" : ""
        } Library-list`}
      >
        {libraryList.map((library) => (
          <div key={library.order}>{library.fullname}</div>
        ))}
      </div>
    </div>
  );
};
