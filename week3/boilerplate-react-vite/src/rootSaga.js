import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import detailSaga from '@pages/Detail/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    homeSaga(),
    detailSaga(),
  ]);
}
