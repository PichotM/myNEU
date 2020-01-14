import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import MainReducer from "../reducer/main";
import ClassTrackerReducer from "../reducer/classtracker";

const reducers = combineReducers({
  main: MainReducer,
  classtracker: ClassTrackerReducer
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
);

export default store;

export type StoreType = ReturnType<typeof reducers>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;
