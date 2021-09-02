import thunk, { ThunkDispatch } from "redux-thunk";
import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { library } from "./reducers/library";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const rootReducer = combineReducers({
  library,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
