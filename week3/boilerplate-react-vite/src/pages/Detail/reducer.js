import { produce } from 'immer';
import { SET_DETAIL } from './constants';

export const initialState = {
  journeyDetail: {},
};

export const storedKey = ['journeyDetail'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL:
        draft.journeyDetail = action.journeyDetail;
        break;
      default:
        break;
    }
  });

export default detailReducer;
