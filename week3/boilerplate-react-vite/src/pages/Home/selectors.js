import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJourneyState = (state) => state.home || initialState;

export const selectJourney = createSelector(selectJourneyState, (state) => state.journey);