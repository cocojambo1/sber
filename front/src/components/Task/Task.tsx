import './Task.sass'
import React from "react";
import { cutStr } from "../../functions/cutStr";

interface IProps {
  text: string,
  id: string | number,
}

const Task: React.FC<IProps> = ({text, id}) => {
  return (
    <div className='task'>
      {
        cutStr( 'asasdfgggggggggsdfgsdfgsdgsdfgsdfgsdvbfgesgsdgsdsdgsdfgsdfgsdfgsdgadgsdfgsdfg d', 70 )
      }
    </div>
  )
}

export default Task