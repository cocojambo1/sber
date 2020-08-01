import './Checkbox.sass'
import React from "react";

interface IProps {
  checked: boolean,
  setChecked: Function,
}

const Checkbox: React.FC<IProps> = ({checked, setChecked}) => {
  return (
    <div id='checkbox' onClick={() => setChecked(!checked)} >
      <label className="checkbox bounce">
        <input type="checkbox" checked={checked} readOnly/>
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>

      <p> Запомнить меня </p>
    </div>
  );
};

export default Checkbox;