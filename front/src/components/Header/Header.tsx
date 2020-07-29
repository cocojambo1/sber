import React, {useState} from "react";
import './Header.sass';
import PopupLanguage from "./LanguagePopup";
import {connect, useDispatch} from "react-redux";

interface IProps {
  language: {
    language: string,
    abbreviated: string
  }
}

const Header = ({language}: IProps) => {
  const dispatch = useDispatch();
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  const openLanguage = () => setShowLanguage(true);
  const closeLanguage = () => setShowLanguage(false);
  const changeLanguage = () => console.log(123)

  return (
    <header>
      <div className="content">
        <div className='language'>
          <div className='language__show' onClick={openLanguage}>
            <svg fill='#000' width='24px' height='24px' viewBox="0 0 24 24">
              <path
                d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
            </svg>

            <p>{ language.language }</p>

            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6.00254 7.15589L1.51317 2.66672C1.38985 2.54311 1.22498 2.47511 1.04917 2.47511C0.873268 2.47511 0.708488 2.54311 0.584976 2.66672L0.191805 3.06009C0.0680976 3.1835 0 3.34848 0 3.52428C0 3.70009 0.0680976 3.86487 0.191805 3.98838L5.53678 9.33345C5.66068 9.45745 5.82624 9.52536 6.00224 9.52487C6.17902 9.52536 6.34439 9.45755 6.46839 9.33345L11.8082 3.99336C11.9319 3.86984 12 3.70506 12 3.52916C12 3.35336 11.9319 3.18858 11.8082 3.06497L11.415 2.6717C11.1591 2.4158 10.7425 2.4158 10.4867 2.6717L6.00254 7.15589Z"/>
            </svg>
          </div>

          <PopupLanguage
            isShow={showLanguage}
            closePopup={closeLanguage}
          />
        </div>
      </div>

      <div style={{ display: showLanguage ? 'block' : 'none' }} className='closePopup' onClick={closeLanguage} />
    </header>
  );
};

const mapStateToProps = (store: any) => {
  return {
    language: store.language,
  };
};

export default connect(mapStateToProps)(Header);