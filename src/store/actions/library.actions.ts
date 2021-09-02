import { AppDispatch } from "..";
import { getData } from "../../api";
import { types } from "../types";

export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getData();
      dispatch({ type: types.library.SET_DATA, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
