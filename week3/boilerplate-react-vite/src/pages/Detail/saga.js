import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { setDetail } from './actions';
import { GET_DETAIL } from './constants';
import { fetchJourneyDetail } from '@domain/api';

function* doFetchJourney({id,cb}) {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchJourneyDetail, id);
    yield put(setDetail(response.data));
  } catch (error) {
    if(error?.response?.status === 404) {
      cb();
  } else {
      yield put(showPopup());
  }
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_DETAIL, doFetchJourney);
}