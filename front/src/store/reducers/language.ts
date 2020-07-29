import {
  CHANGE_LANGUAGE
} from "../constants/language";
import Cookies from 'js-cookie';

interface IState {
  language: string,
  abbreviated: string
}

export interface IAllLanguage {
  language: string,
  abbreviated: string
}

export const LanguageText = {
  ru: {
    form: {
      inputName: 'Имя',
      inputEmail: 'Почта',
      inputPassword: 'Пароль',
      btnSingIn: 'Войти',
      btnSingUp: 'Зарегистрироваться',
      singUp: 'Зарегистрироваться!',
      singIn: 'Войти!',
      textAcc: 'Еще нет аккаунта?',
      haveAcc: 'Есть аккаунт?',
      saveMe: 'Запомнить меня'
    },
  },
  en: {
    form: {
      inputName: 'Name',
      inputEmail: 'Email',
      inputPassword: 'Password',
      btnSingIn: 'Sing-in',
      btnSingUp: 'Sing-up',
      singUp: 'Sing-up!',
      singIn: 'Sing-in!',
      textAcc: 'Don\'t have an account?',
      haveAcc: 'Have an account?',
      saveMe: 'Remember me',
    }
  }
}

export const allLanguage = {
  ru: { language: 'Русский', abbreviated: 'ru' },
  en: { language: 'English', abbreviated: 'en' }
}

//@ts-ignore
const userLang: any = Cookies.get('language') || navigator.language || navigator.userLanguage;

//@ts-ignore
const initialState: IAllLanguage = allLanguage[userLang] || allLanguage.en

export function language(state: IState = initialState, action: any): IAllLanguage | undefined {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      Cookies.set('language', action.abbreviated.abbreviated, { expires: 365 })

      document.location.reload()

      // @ts-ignore
      return state

    default:
      return state
  }
}