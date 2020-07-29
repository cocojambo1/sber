import {takeEvery, put} from 'redux-saga/effects'
import {changeLanguage} from "../actions/language";

function* workerChangeLanguage(abbreviated: string) {
  yield put( changeLanguage(abbreviated) )
}

export function* watchChangeLanguage() {
  // @ts-ignore
  yield takeEvery('CHANGE_LANGUAGE_REQUEST', workerChangeLanguage)
}