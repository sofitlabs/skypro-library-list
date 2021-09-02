import { types } from "../types";

export type DataItemType = { [key: string]: string | number };

export type StateType = {
  data: DataItemType[];
  sort: "default" | "up" | "down";
  filter: string;
};

type ActionType = { type: string; payload: any };
interface HandlersInterface {
  [key: string]: (state: StateType, action: ActionType) => StateType;
}
export const initialState: StateType = {
  data: [],
  sort: "up",
  filter: "",
};

const handlers: HandlersInterface = {
  [types.library.SET_DATA]: (state, { payload }): StateType => ({
    ...state,
    data: payload,
  }),
  default: (state) => state,
};

export const library = (
  state: StateType = initialState,
  action: ActionType,
) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};
