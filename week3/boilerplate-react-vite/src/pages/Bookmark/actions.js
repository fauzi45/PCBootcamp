import { ADD_BOOKMARK, ADD_TO_BOOKMARK, FETCH_BOOKMARK, REMOVE_TO_BOOKMARK } from "./constants";

export const getFetchBookmark = () => ({
    type: FETCH_BOOKMARK
});

export const setAddBookmark = (bookmark) => ({
    type: ADD_BOOKMARK,
    bookmark
});

export const addToBookmark = (id,cb) => ({
    type: ADD_TO_BOOKMARK,
    id,
    cb,
});

export const removeToBookmark = (id,cb) => ({
    type: REMOVE_TO_BOOKMARK,
    id,
    cb
});