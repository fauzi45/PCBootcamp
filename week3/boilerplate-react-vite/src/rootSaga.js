import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import detailSaga from '@pages/Detail/saga';
import profileSaga from '@pages/Profile/saga';
import newJourneySaga from '@pages/CreateJourney/saga';
import bookmarkSaga from '@pages/Bookmark/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    homeSaga(),
    detailSaga(),
    profileSaga(),
    newJourneySaga(),
    bookmarkSaga()
  ]);
}
