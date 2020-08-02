import './Header.sass';
import React from "react";
import Btn from "../ui/btn/Btn";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import img from '../../assets/PbBkPfagb8M.jpg'

const Header = ({ pathname }: any) => {
  const dispatch = useDispatch();
  const btnStyle = {width: '152px', height: '48px'};

  const addTask = () => dispatch( push('/addTask') )
  const goBack = () => dispatch( push('/') )

  return (
    <header className='head'>
      <div className='head__container'>
        <div className='logo'>
          <svg width="50px" height="50px" viewBox="0 0 30 30">
            <title>sberbank.ru</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard-3-Copy" transform="translate(-250.000000, -352.000000)">
                <g id="sberbank.ru" transform="translate(250.000000, 352.000000)">
                  <circle id="Oval-3" fill="#1C9F27" cx="15" cy="15" r="15"></circle>
                  <g id="Group" transform="translate(6.000000, 7.000000)" fill-rule="nonzero" fill="#FFFFFF">
                    <path d="M5.691,5.254 L13.71,0.69 C13.319,0.425 12.903,0.197 12.471,0 L5.668,3.811 L2.681,2.129 C2.409,2.442 2.159,2.776 1.935,3.127 L5.691,5.254 Z" id="Shape"></path>
                    <path d="M16.501,3.901 L16.464,3.927 L5.668,9.975 L0.645,7.148 C0.635,7.305 0.62,7.461 0.62,7.62 C0.62,12.249 4.373,16 9,16 C13.628,16 17.38,12.249 17.38,7.62 C17.38,6.283 17.058,5.023 16.501,3.901 Z" id="Shape"></path>
                    <path d="M15.741,2.657 C15.459,2.274 15.148,1.915 14.805,1.586 L5.667,6.704 L1.326,4.26 C1.131,4.702 0.981,5.165 0.865,5.642 L5.691,8.376 L15.741,2.657 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <div className='logo__text'>
            <p>Sberbank</p>
            <p>Traker</p>
          </div>
        </div>

        {
          pathname !== '/' ? (
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