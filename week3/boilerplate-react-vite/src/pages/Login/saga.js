import { takeLatest, call, put } from 'redux-saga/effects';
import { SET_LOGIN } from '@containers/Client/constants';
import { setLogin, setToken } from '@containers/Client/actions';
import { login } from '@domain/api';
import { setLoading } from '@containers/App/actions';
function* doLogin(action) {
    setLoading(true);
    try {
      const response = yield call(login, action.login);
    //   yield put(setLogin(true));
    console.log(response)
      yield put(setToken(response.data.token));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(SET_LOGIN, doLogin);
  }
  