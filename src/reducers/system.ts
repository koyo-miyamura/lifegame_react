import { Reducer } from "redux";
import { SystemAction } from "../actions/system";

export type SystemState = {
  isToastOpen: boolean;
  toastMessage: string;
};

export const initialState: SystemState = {
  isToastOpen: false,
  toastMessage: "",
};

const SystemReducer: Reducer<SystemState, SystemAction> = (
  state = initialState,
  action
): SystemState => {
  switch (action.type) {
    case "open_toast":
      return {
        ...state,
        isToastOpen: true,
        toastMessage: action.toastMessage || "",
      };
    case "close_toast":
      return {
        ...state,
        isToastOpen: false,
        toastMessage: "",
      };
    default:
      return state;
  }
};

export default SystemReducer;
