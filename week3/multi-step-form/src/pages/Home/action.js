import { SET_STEP, SET_USERNAME } from "./constant";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setUsernameDispatcher = (username) => ({
  type: SET_USERNAME,
  username
})