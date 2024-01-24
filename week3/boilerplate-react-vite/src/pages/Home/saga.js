import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { fetchJourney } from '@domain/api';
import { setJourney } from './actions';
import { FETCH_JOURNEY } from './constants';

function* doFetchJourney() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchJourney);
    yield put(setJourney(response.data));
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(FETCH_JOURNEY, doFetchJourney);
}