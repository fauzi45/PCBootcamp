import { FETCH_JOURNEY, SET_JOURNEY } from "./constants";

export const getFetchJourney = () => ({
  type: FETCH_JOURNEY
});

export const setJourney = (journey) => ({
  type: SET_JOURNEY,
  journey
})