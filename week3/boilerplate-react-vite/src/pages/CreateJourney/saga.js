import { newJourney } from "@domain/api";
import { SET_NEWJOURNEY } from "./constants";
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from "@containers/App/actions";

function* doNewJourney({ post, cb }) {
    yield put(setLoading(true));
    try {
      yield call(newJourney, post);
      cb();
    } catch (error) {
      console.log(error);
    }
    yield put(setLoading(false));
  }
  
  export default function* newJourneySaga() {
    yield takeLatest(SET_NEWJOURNEY, doNewJourney);
  }