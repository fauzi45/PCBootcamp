import { produce } from "immer";
import { SET_STEP, SET_PROFILE } from "./constant";

export const initialState = {
  profile: {
    name: "",
    email: "",
    phoneNumber: "",
    plan: "",
    categoryRedux: "",
    planValue: "",
    addOns: [],
  },
  step: 1,
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_PROFILE:
        draft.profile = action.profile;
        break;
      default:
        break;
    }
  });

export default homeReducer;
