import './Main.sass'
import React from "react";
import Cookies from "js-cookie";
import { Redirect } from 'react-router-dom';
import Task from "../../components/Task/Task";
import Recorder from "../../components/Recorder/Recorder";

const Main = () => {
  // if ( !Cookies.get('token') )
  //   return <Redirect to='/auth/sing-in' />
  // else

  return (
    <div className='main' >
      <Recorder/>
    </div>
    )
}

export default Main