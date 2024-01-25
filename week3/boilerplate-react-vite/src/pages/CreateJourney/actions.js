import { SET_NEWJOURNEY } from "./constants";

export const setNewJourney = (post,cb) => ({
    type: SET_NEWJOURNEY,
    post,
    cb
})