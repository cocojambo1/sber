import React, {useCallback, useState} from "react";
import Input from "../ui/input/Input";
import Btn from "../ui/btn/Btn";
import validateEmail from "../../functions/validateEmail";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {LanguageText} from "../../store/reducers/language";
import {connect} from "react-redux";
import {singUpRequest} from "../../store/actions/user";

interface IProps {
  textStyle: any,
  language: {
    language: string,
    abbreviated: string,
  };
};

const SingUp: React.FC<IProps> = ({textStyle, language}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(true);
  // @ts-ignore
  const languageText = LanguageText[language.abbreviated];

  const btnStyle = {
    width: '180px',
    margin: '0 auto',
    cursor: email.length < 4 || password.length < 6 || !validateEmail(email) ? 'default' : 'pointer',
    backgroundColor: email.length < 4 || password.length < 6 || name.length < 4 || !validateEmail(email) ? '#B1B0A6' : '#F5D312',
  };

  const singUp = useCallback(() => {
      if ( name.length >= 4 && password.length >= 6  && email.length >= 4 ) {
        dispatch(singUpRequest(email, password, name))
      }
  }, [name, password, email])

  return (
    <>
      <form autoComplete='off' className='authForm'>
        <Input
          error={error}
          maxLength={50}
          id='name'
          value={name}
          onchange={setName}
          type='text'
          placeholder={languageText.form.inputName}
        />

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
          maxLength={50}
          id='password'
          value={password}
          onchange={setPassword}
          type='password'
          placeholder={languageText.form.inputPassword}
        />

        <Btn
          text={languageText.form.btnSingUp}
          onclick={singUp}
          style={btnStyle}
        />
      </form>

      <p style={{ ...textStyle, fontSize: '13px', }} >
        { languageText.form.haveAcc } <NavLink style={{ ...textStyle, textDecorationLine: 'underline', fontSize: '13px', }} exact to='/auth/sing-in' >{ languageText.form.singIn }</NavLink>
      </p>
    </>
  );
};

const mapStateToProps = (store: any) => {
  return {
    language: store.language
  }
}

export default connect(mapStateToProps)(SingUp);