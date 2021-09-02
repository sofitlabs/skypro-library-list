import { AppDispatch } from "..";
import { getData } from "../../api";

export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getData();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};
