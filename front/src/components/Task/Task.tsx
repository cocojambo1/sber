import './Task.sass'
import React from "react";
import { NavLink } from "react-router-dom";
import { cutStr } from "../../functions/cutStr";

interface IProps {
  text: string,
  id: string | number,
}

const Task: React.FC<IProps> = ({text, id}) => {
  return (
    <NavLink exact to={`/task/${id}`} className='task'>
      {
        cutStr( text, 70 )
      }
    </NavLink>
  )
}

export default Task