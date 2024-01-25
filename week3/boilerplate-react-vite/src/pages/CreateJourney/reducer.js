import { produce } from 'immer';
import { SET_NEWJOURNEY } from './constants';

export const initialState = {
  post: {},
};

export const storedKey = ['post'];

const createJourneyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_NEWJOURNEY:
        draft.post = action.post;
        break;
      default:
        break;
    }
  });

export default createJourneyReducer;
