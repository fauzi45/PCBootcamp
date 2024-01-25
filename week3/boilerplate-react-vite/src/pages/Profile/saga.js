import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';

import { fetchProfileData, fetchProfileMyPost } from '@domain/api';
import { setProfile, setMyPost } from './actions';
import { FETCH_PROFILE, FETCH_MYPOST } from './constants';

function* doFetchProfile() {
    yield put(setLoading(true));
    try {
      const response = yield call(fetchProfileData);
      yield put(setProfile(response.data));
    } catch (error) {
      console.log(error)
    }
    yield put(setLoading(false));
  }
  
  function* doFetchMyPost() {
    yield put(setLoading(true));
    try {
      const response = yield call(fetchProfileMyPost);
      yield put(setMyPost(response.data));
    } catch (error) {
      console.log(error)
    }
    yield put(setLoading(false));
  }

  export default function* profileSaga() {
    yield takeLatest(FETCH_PROFILE, doFetchProfile);
    yield takeLatest(FETCH_MYPOST, doFetchMyPost);
  }