import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { AddBookmarkapi, allBookmark } from '@domain/api';
import { setAddBookmark } from './actions';
import { ADD_TO_BOOKMARK, FETCH_BOOKMARK, REMOVE_TO_BOOKMARK } from './constants';

function* doFetchBookmark() {
  yield put(setLoading(true));
  try {
    const response = yield call(allBookmark);
    yield put(setAddBookmark(response.data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* doAddToBookmark({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(AddBookmarkapi, id);
    cb();
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* doRemoveToBookmark({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(AddBookmarkapi, id);
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(FETCH_BOOKMARK, doFetchBookmark);
  yield takeLatest(ADD_TO_BOOKMARK, doAddToBookmark);
  yield takeLatest(REMOVE_TO_BOOKMARK, doRemoveToBookmark);
}
