import { combineReducers } from "redux";
import LifeGame from "./lifeGame";
import System from "./system";

const rootReducer = combineReducers({
  LifeGame,
  System,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
