import { GET_DETAIL, SET_DETAIL } from "./constants";

export const getDetail = (id,cb) => ({
    type: GET_DETAIL,
    id,
    cb
});

export const setDetail = (journeyDetail) => ({
    type: SET_DETAIL,
    journeyDetail
})