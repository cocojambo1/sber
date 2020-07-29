import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  SINGUP_REQUEST,
  SINGUP_SUCCESS,
  SINGUP_FAIL
} from "../constants/user";
import Cookies from "js-cookie";

interface IState {
  isFetching: boolean,
  isError: boolean,
  errorCode: number | null,
  isLogin: boolean
}

interface IAction {
  type: string,
  token: string,
  message: string,
  checked: boolean,
  errorCode: number,
}

const initialState = {
  isFetching: false,
  isError: false,
  errorCode: null,
  isLogin: false
}

export function user(state: IState = initialState, action: IAction): object {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SINGUP_REQUEST:
      return {isFetching: true, isError: false, errorCode: null, isLogin: false};

    case LOGIN_SUCCESS:
    case SINGUP_SUCCESS:
      if (action.checked) {
        Cookies.set('token', action.token, { expires: 365 })
      } else {
        Cookies.set('token', action.token)
      }

      document.location.reload()

      return {isFetching: false, isError: false, errorCode: null, isLogin: true}

    case LOGIN_FAIL:
    case SINGUP_FAIL:
      return {isFetching: false, isError: true, errorCode: action.errorCode, isLogin: false}

    default:
      return state
  }
}