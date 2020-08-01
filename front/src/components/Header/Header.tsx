import './Header.sass';
import React from "react";
import Btn from "../ui/btn/Btn";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Header = () => {
  const dispatch = useDispatch();
  const btnStyle = {width: '152px'};

  const addTask = () => {
    dispatch( push('/addTask') )
  }

  return (
    <header>
      <Btn
        style={btnStyle}
        onclick={addTask}
        text='Добавить задачу'
      />
    </header>
  );
};

export default Header;