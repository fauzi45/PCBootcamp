import { produce } from "immer";
import { SET_JOURNEY } from "./constants";

export const initialState = {
  journey: [],
};

export const storedKey = ['journey'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_JOURNEY:
        draft.journey = action.journey;
        break;
      default:
        break;
    }
  });

export default homeReducer;
