import React from "react";
import './Btn.sass'

interface IPros {
  text: string,
  onclick: any,
  style: any,
}

const Btn: React.FC<IPros> = ({ text, onclick, style = {} }) => {
  const click = (e: any) => {
    e.preventDefault()

    if ( onclick )
      onclick()
  }

  return (
    <button className='btn' style={style} onClick={click} >
      { text }
    </button>
  )
}

export default Btn