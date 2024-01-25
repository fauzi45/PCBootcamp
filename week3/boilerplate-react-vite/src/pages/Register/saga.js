import { SET_USER } from './constants';
import { takeLatest, call } from 'redux-saga/effects';
import { register } from '@domain/api';

import toast, { Toaster } from 'react-hot-toast';

function* doRegister({ user,cb }) {
  try {
    yield call(register, user);
    cb();
  } catch (error) {
    toast.error("Email or Password is already exist");
  }
}

export default function* registerSaga() {
  yield takeLatest(SET_USER, doRegister);
}
