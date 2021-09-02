import { types } from "../types";

type ActionType = { type: string; payload: any };
interface HandlersInterface {
  [key: string]: (state: StateType, action: ActionType) => void;
}

type StateType = {
  data: { [key: string]: string | number };
};
export const initialState: StateType = {
  data: {},
};

const handlers: HandlersInterface = {
  [types.library.SET_DATA]: (state, { payload }) => ({
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
