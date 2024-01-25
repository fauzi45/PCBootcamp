import { takeLatest, call, put } from 'redux-saga/effects';
import { setLogin, setToken } from '@containers/Client/actions';
import { login } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { DO_LOGIN } from './constants';

import toast, { Toaster } from 'react-hot-toast';

function* doLogin({formData}) {
    setLoading(true);
    try {
      const response = yield call(login, formData);
      yield put(setLogin(true));
      yield put(setToken(response.data.token));
    } catch (error) {
      toast.error("Password or Email is wrong");
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
  }
  