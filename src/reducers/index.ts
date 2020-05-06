import { combineReducers } from "redux";
import System from "./system";

const rootReducer = combineReducers({
  System,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
