import { produce } from "immer";
import { SET_NAVBAR_TRANS } from "./constants";

export const initialState = {
  navbarTrans: "",
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_NAVBAR_TRANS:
        draft.navbarTrans = action.navbarTrans;
        break;
      default:
        break;
    }
  });

export default homeReducer;
