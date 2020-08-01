import React from "react";
import './AddTask.sass'

interface IProps {
  value: string,
  classname: string,
  onchange: Function,
  placeholder: string,
}

const Input: React.FC<IProps> = ({value, onchange, placeholder, classname}) => {
  return (
    <input
      type="text"
      value={value}
      autoComplete='off'
      placeholder={placeholder}
      className={classname}
      onChange={e => onchange(e.target.value)}
    />
  )
}

export default Input