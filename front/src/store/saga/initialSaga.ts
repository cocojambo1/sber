import { all} from 'redux-saga/effects';
import { watchLogin, watchSingUp } from "./user";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSingUp(),
  ]);
};
