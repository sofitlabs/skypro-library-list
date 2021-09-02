import { useParams } from "react-router-dom";
import "./LibraryInfo.scss";
import { RootState, useAppSelector } from "../../store";

export const LibraryInfo = () => {
  const { data } = useAppSelector((state: RootState) => state.library);
  const { order } = useParams<{ order: string }>();

  const library = data.find((l) => l.order === +order);

  return (
    <div className="LibraryInfo">
      {library &&
        !!Object.keys(library).length &&
        Object.keys(library).map((key) => {
          if (key === "order") {
            return <></>;
          }
          return (
            <div className="LibraryInfo__item">
              {key}: {library[key]}
            </div>
          );
        })}
    </div>
  );
};
