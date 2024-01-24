import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJourneyState = (state) => state.journey || initialState;

export const selectJourney = createSelector(selectJourneyState, (state) => state.journey);