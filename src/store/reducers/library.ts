type ActionType = { type: string; payload: any };
interface HandlersInterface {
  [key: string]: (state: StateType, action: ActionType) => void;
}

type StateType = {
  data: { [key: string]: any };
};
export const initialState: StateType = {
  data: {},
};

const handlers: HandlersInterface = {
  default: (state) => state,
};

export const library = (
  state: StateType = initialState,
  action: ActionType,
) => {
  const handler = handlers[action.type] || handlers.default;
  return handler(state, action);
};
