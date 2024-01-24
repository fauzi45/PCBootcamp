import { SET_USER } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUser } from './actions';
import { register } from '@domain/api';

function* doRegister({ user }) {
  try {
    const response = yield call(register, user);
  } catch (error) {
    console.log(error);
  }
}

export default function* registerSaga() {
  yield takeLatest(SET_USER, doRegister);
}
