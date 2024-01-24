import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJourneyDetailState = (state) => state.detail || initialState;

export const selectJourneyDetail = createSelector(selectJourneyDetailState, (state) => state.journeyDetail)