import { Reducer } from "redux";
import { LifeGameAction } from "../actions/lifeGame";

export type LifeGameState = {
  isStart: boolean;
};

export const initialState: LifeGameState = { isStart: false };

const LifeGameReducer: Reducer<LifeGameState, LifeGameAction> = (
  state = initialState,
  action
): LifeGameState => {
  switch (action.type) {
    case "set_is_start":
      return {
        ...state,
        isStart: action.isStart,
      };
    default:
      return state;
  }
};

export default LifeGameReducer;
