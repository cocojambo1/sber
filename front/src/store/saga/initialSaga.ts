import { all } from 'redux-saga/effects';
import {watchTask, watchTasks} from "./task";
import { watchLogin, watchSingUp } from "./user";

export default function* rootSaga() {
  yield all([
    watchTask(),
    watchLogin(),
    watchTasks(),
    watchSingUp(),
  ]);
};
