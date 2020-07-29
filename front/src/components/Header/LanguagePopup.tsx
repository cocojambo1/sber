import React from "react";
import './Header.sass';
import {allLanguage, IAllLanguage} from "../../store/reducers/language";
import {useDispatch} from "react-redux";

interface IProps {
  isShow: boolean,
  closePopup: any
}

const LanguagePopup: React.FC<IProps> = ({isShow, closePopup}) => {
  const dispatch = useDispatch();

  const chooseLanguage = (abbreviated: string) => {
    console.log( abbreviated )

    dispatch({
      type: 'CHANGE_LANGUAGE_REQUEST',
      abbreviated,
    });

    closePopup();
  };
  
  return (
    <div style={{display: isShow ? 'block' : 'none'}} className='popup'>
      {
        Object.values(allLanguage).map( (language: IAllLanguage, i: number) => (
          <div key={i} onClick={ () => chooseLanguage(language.abbreviated) } className='popup__item'>
            <p>{ language.language }</p>
          </div>
        ))
      }
    </div>
  );
};

export default LanguagePopup;