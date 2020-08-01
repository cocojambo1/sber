import React, { useCallback, useState } from "react";
import Input from "../ui/input/Input";
import Btn from "../ui/btn/Btn";
import validateEmail from "../../functions/validateEmail";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { singUpRequest } from "../../store/actions/user";

interface IProps {
  textStyle: any,
};

const SingUp: React.FC<IProps> = ({textStyle}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(true);

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
          placeholder='Имя'
        />

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
          maxLength={50}
          id='password'
          value={password}
          onchange={setPassword}
          type='password'
          placeholder='Пароль'
        />

        <Btn
          text='Зарегестрироваться'
          onclick={singUp}
          style={btnStyle}
        />
      </form>

      <p style={{ ...textStyle, fontSize: '13px', }} >
        Есть аккаут? <NavLink style={{ ...textStyle, textDecorationLine: 'underline', fontSize: '13px', }} exact to='/auth/sing-in' > Войти </NavLink>
      </p>
    </>
  );
};

export default SingUp;