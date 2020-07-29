import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,

  SINGUP_REQUEST,
  SINGUP_SUCCESS,
} from "../constants/user";

interface IResponse {
  token: string,
  error?: boolean,
  checked: boolean,
  errorCode?: number,
}

export const loginRequest = (email: string, password: string, checked: boolean) => ({
  type: LOGIN_REQUEST,
  email,
  password,
  checked,
});

export const loginSuccess = (data: IResponse) => ({
  type: LOGIN_SUCCESS,
  token: data.token,
  checked: data.checked,
});

export const singUpRequest = (email: string, password: string, name: string) => ({
  type: SINGUP_REQUEST,
  email,
  password,
  name,
});

export const singUpSuccess = (response: IResponse) => ({
  type: SINGUP_SUCCESS,
  token: response.token,
  checked: response.checked,
});