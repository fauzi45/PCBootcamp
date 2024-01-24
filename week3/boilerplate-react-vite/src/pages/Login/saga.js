import { takeLatest, call, put } from 'redux-saga/effects';
import { SET_LOGIN } from '@containers/Client/constants';
import { setLogin, setToken } from '@containers/Client/actions';
import { login } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { DO_LOGIN } from './constants';
function* doLogin({formData}) {
    setLoading(true);
    try {
      const response = yield call(login, formData);
      yield put(setLogin(true));
      yield put(setToken(response.data.token));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
  }
  