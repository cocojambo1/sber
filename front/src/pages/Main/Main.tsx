import './Main.sass'
import React from "react";
import Cookies from "js-cookie";
import { Redirect } from 'react-router-dom';

const Main = () => {
  if ( !Cookies.get('token') )
    return <Redirect to='/auth/sing-in' />
  else
    return (
      <div className='main' >
        { Cookies.get('token') }
      </div>
    )
}

export default Main