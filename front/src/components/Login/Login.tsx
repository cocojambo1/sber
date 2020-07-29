import React, {useCallback, useState} from "react";
import Input from "../ui/input/Input";
import Btn from "../ui/btn/Btn";
import validateEmail from "../../functions/validateEmail";
import { loginRequest } from "../../store/actions/user";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {LanguageText} from "../../store/reducers/language";
import {connect} from "react-redux";
import Checkbox from "../ui/checkbox/Checkbox";

interface IProps {
  textStyle: any,
  language: {
    language: string,
    abbreviated: string,
  };
};

const Login: React.FC<IProps> = ({textStyle, language}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  // @ts-ignore
  const languageText = LanguageText[language.abbreviated];

  const btnStyle = {
    backgroundColor: email.length < 4 || password.length < 6 || !validateEmail(email) ? '#B1B0A6' : '#F5D312',
    margin: '0 auto',
    cursor: email.length < 4 || password.length < 6 || !validateEmail(email) ? 'default' : 'pointer',
  };

  const login = useCallback(() => {
    if (email.length > 4 && password.length > 6) {
      dispatch( loginRequest(email, password, checked) )
    }
  }, [email, password])

  return (
    <>
      <form autoComplete='off' className='authForm' >
        <Input
          error={error}
          maxLength={50}
          id='email'
          value={email}
          onchange={setEmail}
          type='text'
          placeholder={languageText.form.inputEmail}
        />

        <Input
          error={error}
          maxLength={ 30 }
          id='password'
          value={ password }
          onchange={ setPassword }
          type='password'
          placeholder={languageText.form.inputPassword}
        />

        <Checkbox
          checked={checked}
          setChecked={setChecked}
        />

        <Btn
          text={languageText.form.btnSingIn}
          onclick={login}
          style={btnStyle}
        />
      </form>

      <p style={{ ...textStyle, fontSize: '11px', marginTop: '8px' }} >{ languageText.form.textAcc }</p>

      <NavLink style={{ ...textStyle, textDecorationLine: 'underline', fontSize: '13px', }} exact to='/auth/sing-up' >{ languageText.form.singUp }</NavLink>
    </>
  );
};

const mapStateToProps = (store: any) => {
  return {
    language: store.language
  }
}

export default connect(mapStateToProps)(Login);