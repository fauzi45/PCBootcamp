import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBookmarkState = (state) => state.bookmark || initialState;

export const selectBookmark = createSelector(selectBookmarkState, (state) => state.bookmark);