//@ts-ignore
import React from 'react'
import './Input.sass'

interface IProps {
  value: string,
  onchange: any,
  type: string,
  placeholder: string,
  id: string,
  maxLength: number,
  error: boolean
}

const Input = ({ value, onchange, type, placeholder, id, maxLength, error }: IProps) => {
  // @ts-ignore
  const focus = (): void => document.getElementById( id ).removeAttribute( 'readOnly' )

  return (
    <input
      maxLength={ maxLength }
      id={ id }
      autoComplete="off"
      className='input'
      type={ type }
      value={ value }
      onChange={ e => onchange( e.target.value ) }
      placeholder={ placeholder }
      readOnly
      onFocus={ focus }
    />
  )
}

export default Input