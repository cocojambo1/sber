import './AddTask.sass'
import Input from "./Input";
import React, { useState } from "react";
import RichEditorExample from "../../components/Editor/Editor";
import Play from "./svg/Play";
import Pause from "./svg/Pause";
import Close from "./svg/Close";
import Loader from './Loader/Loader'

const AddTask = () => {
  const [title, setTitle] = useState<string>('')

  return (
    <div className='addTask'>
      <div className='addTask__block'>
        <Input
          value={title}
          onchange={setTitle}
          classname='addTask__title'
          placeholder='Название проекта'
        />

        <RichEditorExample/>

        <div className='audio'>
          <div className='audio__recorder'>
            <div className='audio__label'>
              Аудио описание
            </div>

            <div className='audio__options'>
              <div className='audio__btn'>
                <Play/>
              </div>

              <div className='audio__btn'>
                <Pause/>
              </div>

              <div className='audio__btn'>
                <Close/>
              </div>

              <div className='audio__btn'>
                <Play/>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddTask