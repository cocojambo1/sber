import { all} from 'redux-saga/effects';
import { watchLogin, watchSingUp } from "./user";
import { watchChangeLanguage } from "./language";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSingUp(),
    watchChangeLanguage(),
  ]);
};
