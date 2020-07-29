import './Checkbox.sass'
import React from "react";
import {connect} from "react-redux";
import {LanguageText} from "../../../store/reducers/language";

interface IProps {
  checked: boolean,
  setChecked: Function,
  language: {
    language: string,
    abbreviated: string,
  };
}

const Checkbox: React.FC<IProps> = ({checked, setChecked, language}) => {
  // @ts-ignore
  const languageText = LanguageText[language.abbreviated];

  return (
    <div id='checkbox' onClick={() => setChecked(!checked)} >
      <label className="checkbox bounce">
        <input type="checkbox" checked={checked} readOnly/>
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>

      <p>{ languageText.form.saveMe }</p>
    </div>
  );
};

const mapStateToProps = (store: any) => {
  return {
    language: store.language
  }
}

export default connect(mapStateToProps)(Checkbox);