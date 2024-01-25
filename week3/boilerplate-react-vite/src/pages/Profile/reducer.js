import { produce } from 'immer';

import { SET_PROFILE, SET_MYPOST } from './constants';

export const initialState = {
  profile: [],
  post: [],
};

export const storedKey = ['profile','post'];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PROFILE:
        draft.profile = action.profile;
        break;
      case SET_MYPOST:
        draft.post = action.post;
        break;
      default:
        break;
    }
  });

  export default profileReducer;
