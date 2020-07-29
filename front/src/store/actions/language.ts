import {
  CHANGE_LANGUAGE
} from "../constants/language";

export const changeLanguage = (abbreviated: string) => ({
  type: CHANGE_LANGUAGE,
  abbreviated
})