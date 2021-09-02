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

export const setSortStatus = (sort: "default" | "up" | "down") => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: types.library.SET_SORT, payload: sort });
  };
};

export const setFilter = (filter: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: types.library.SET_FILTER, payload: filter });
  };
};
