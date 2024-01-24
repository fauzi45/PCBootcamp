import { GET_DETAIL, SET_DETAIL } from "./constants";

export const getDetail = (id) => ({
    type: GET_DETAIL,
    id,
});

export const setDetail = (journeyDetail) => ({
    type: SET_DETAIL,
    journeyDetail
})