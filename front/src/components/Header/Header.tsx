import './Header.sass';
import React from "react";
import Logo from "./svg/Logo";
import Btn from "../ui/btn/Btn";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { push } from "connected-react-router";
import Cookies from "js-cookie";

const Header = ({ pathname }: any) => {
  const dispatch = useDispatch();
  const btnStyle = {width: '152px', height: '48px'};

  const addTask = () => dispatch( push('/addTask') )
  const goBack = () => dispatch( push('/') )

  return (
    <header className='head'>
      <div className='head__container'>
        <NavLink exact to='/' className='logo'>
          <Logo/>

          <div className='logo__text'>
            <p>Sberbank</p>
            <p>Tracker</p>
          </div>
        </NavLink>

        {
          pathname !== '/' && Cookies.get('token') ? (
            (
              <Btn
                text='Назад'
                onclick={goBack}
                style={btnStyle}
              />
            )
          ) : null
        }

        {
          pathname !== '/addTask' ? (
            <Btn
              style={btnStyle}
              onclick={addTask}
              text='Добавить задачу'
            />
          ) : null
        }
      </div>
    </header>
  );
};

const mapStateToProps = (store: any) => {
  return {
    pathname: store.router.location.pathname
  }
}

export default connect(mapStateToProps)(Header);