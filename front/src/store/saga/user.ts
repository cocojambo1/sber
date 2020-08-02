import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { loginSuccess, singUpSuccess } from "../actions/user";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  SINGUP_FAIL,
  SINGUP_REQUEST
} from "../constants/user";

const login = ( email: string, password: string ) => axios.post('http://localhost:7000/user/login', { email, password });
const singUp = ( name: string, email: string, password: string ) => axios.post('http://localhost:7000/user/registration', { name, email, password });

interface IAction {
  type: string,
  name: string,
  email: string,
  checked: boolean,
  password: string,
};

/** Saga  for login */
function* loginWorker(action: IAction) {
  try {
    const response = yield call( login, action.email, action.password );

    if (response.status === 200) {
      const data = {
        token: response.data.token,
        checked: action.checked
      };

      yield put( loginSuccess(data) );
    } else {
      yield put({
        type: LOGIN_FAIL,
      });
    }
  } catch (e) {
    yield put({
      type: LOGIN_FAIL,
    });
  };
};

export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, loginWorker);
};

/** Saga for sing - up */
function* SingUpWorker(action: IAction) {
  try {
    const response = yield call( singUp, action.name, action.email, action.password );

    if (response.status === 200) {
      const data = {
        token: response.data.token,
        checked: true,
      };

      yield put( singUpSuccess(data) );
    } else {
      yield put({
        type: SINGUP_FAIL
      });
    }
  } catch (e) {
    yield put({
      type: SINGUP_FAIL
    });
  };
};

export function* watchSingUp() {
  yield takeEvery(SINGUP_REQUEST, SingUpWorker);
};