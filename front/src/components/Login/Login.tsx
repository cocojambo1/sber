import Btn from "../ui/btn/Btn";
import Input from "../ui/input/Input";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Checkbox from "../ui/checkbox/Checkbox";
import React, { useCallback, useState } from "react";
import { loginRequest } from "../../store/actions/user";
import validateEmail from "../../functions/validateEmail";

interface IProps {
  textStyle: any,
};

const Login: React.FC<IProps> = ({textStyle}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

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
          placeholder='Почта'
        />

        <Input
          error={error}
          maxLength={ 30 }
          id='password'
          value={ password }
          onchange={ setPassword }
          type='password'
          placeholder='Пароль'
        />

        <Checkbox
          checked={checked}
          setChecked={setChecked}
        />

        <Btn
          text='Войти'
          onclick={login}
          style={btnStyle}
        />
      </form>

      <p style={{ ...textStyle, fontSize: '11px', marginTop: '8px' }} > Ещё нет аккаунта?  </p>

      <NavLink style={{ ...textStyle, textDecorationLine: 'underline', fontSize: '13px', }} exact to='/auth/sing-up' > Зарегистрироваться! </NavLink>
    </>
  );
};

export default Login;