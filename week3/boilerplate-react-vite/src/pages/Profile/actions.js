import { FETCH_PROFILE, SET_PROFILE, FETCH_MYPOST, SET_MYPOST } from "./constants";

export const getFetchProfile = () => ({
    type: FETCH_PROFILE
});

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
});

export const getFetchMyPost = () => ({
    type: FETCH_MYPOST
});

export const setMyPost = (post) => ({
    type: SET_MYPOST,
    post
});