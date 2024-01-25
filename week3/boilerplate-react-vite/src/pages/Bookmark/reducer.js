import { produce } from 'immer';

import { ADD_BOOKMARK } from './constants';

export const initialState = {
  bookmark: [],
};

export const storedKey = ['bookmark'];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_BOOKMARK:
        draft.bookmark = action.bookmark;
        break;
      default:
        break;
    }
  });

export default bookmarkReducer;
