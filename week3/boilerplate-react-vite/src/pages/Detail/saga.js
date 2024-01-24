import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { setDetail } from './actions';
import { GET_DETAIL } from './constants';
import { fetchJourneyDetail } from '@domain/api';

function* doFetchJourney(action) {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchJourneyDetail, action.id);
    yield put(setDetail(response.data));
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_DETAIL, doFetchJourney);
}