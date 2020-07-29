import './Auth.sass'
import React from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Login from "../../components/Login/Login";
import SingUp from "../../components/Singup/SingUp";
import Loader from "../../components/ui/loader/Loader";

interface IProps {
  isFetching: boolean
}

const Auth: React.FC<IProps> = ({isFetching}) => {
  const location = useLocation()
  const textStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '15px',
    color: '#383C4A',
    marginTop: '16px'
  }

  if (Cookies.get('token')) {
    return <Redirect to='/' />
  }

  if (isFetching)
    return (
      <div className='Loader' >
        <Loader/>
      </div>
    )

  return (
    <div className='formPage' >
      <div className='form' >
        <div className='userIcon' >
          <svg width="42" height="45" viewBox="0 0 42 45" fill="none">
            <path d="M21.1862 22.9727C14.9782 22.9727 9.92957 17.8211 9.92957 11.4864C9.92957 5.15168 14.9782 6.10352e-05 21.1918 6.10352e-05C27.3999 6.10352e-05 32.4484 5.15168 32.4484 11.4864C32.4428 17.8211 27.3942 22.9727 21.1862 22.9727ZM21.1862 1.13721C15.5916 1.13721 11.0383 5.77769 11.0383 11.4864C11.0383 17.1951 15.5916 21.8413 21.1862 21.8413C26.7807 21.8413 31.3284 17.1951 31.3284 11.4864C31.3284 5.77769 26.7807 1.13721 21.1862 1.13721Z" fill="#6C6666"/>
            <path d="M41.6001 44.119H0.800493L0.766724 37.1353C0.766724 34.706 1.54906 32.4259 3.0293 30.5365C4.46452 28.7044 6.47945 27.395 8.70263 26.8436L8.76454 26.8264H8.83208L33.6248 26.7574L33.6979 26.7804C35.8648 27.3835 37.8516 28.7331 39.2925 30.5767C40.7783 32.4776 41.5944 34.8036 41.5944 37.1296L41.6001 44.119ZM1.90927 42.9876H40.4857V37.1353C40.4857 35.0621 39.754 32.9888 38.4256 31.2888C37.1424 29.652 35.392 28.4459 33.4784 27.8946L8.90519 27.9635C6.94654 28.4631 5.168 29.6232 3.90163 31.2429C2.57898 32.9313 1.88107 34.9644 1.88107 37.1296L1.90927 42.9876Z" fill="#6C6666"/>
          </svg>
        </div>

        {
         location.pathname === '/auth/sing-in' ? <Login textStyle={textStyle} /> : null
        }

        {
          location.pathname === '/auth/sing-up' ? <SingUp textStyle={textStyle} /> : null
        }
      </div>
    </div>
  );
};

const mapStateToProps = (store: any) => {
  return {
    isFetching: store.user.isFetching,
  };
};

export default connect(mapStateToProps)(Auth);