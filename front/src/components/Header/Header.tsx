import './Header.sass';
import React from "react";
import Btn from "../ui/btn/Btn";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Header = ({ pathname }: any) => {
  const dispatch = useDispatch();
  const btnStyle = {width: '152px'};

  const addTask = () => dispatch( push('/addTask') )
  const goBack = () => dispatch( push('/') )

  return (
    <header>
      {
        pathname !== '/addTask' ? (
          <Btn
            style={btnStyle}
            onclick={addTask}
            text='Добавить задачу'
          />
        ) : (
          <Btn
            text='Назад'
            onclick={goBack}
            style={btnStyle}
          />
        )
      }
    </header>
  );
};

const mapStateToProps = (store: any) => {
  return {
    pathname: store.router.location.pathname
  }
}

export default connect(mapStateToProps)(Header);