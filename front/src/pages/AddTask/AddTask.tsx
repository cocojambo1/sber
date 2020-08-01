import './AddTask.sass'
import Input from "./Input";
import React, { useState } from "react";
import RichEditorExample from "../../components/Editor/Editor";
import Play from "./svg/Play";
import Pause from "./svg/Pause";
import Close from "./svg/Close";
import Stop from "./svg/Stop";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState<string>('')
  const [audio, setAudio] = useState<boolean>(false)
  const audioChunks: any = [];
  let rec: any;

  navigator.mediaDevices.getUserMedia({audio: true}).then(stream => handlerFunction(stream))

  const handlerFunction = (stream: any) => {
    // @ts-ignore
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e: any) => {
      audioChunks.push(e.data);

      if (rec.state === "inactive") {
        const voiceBlob = new Blob(audioChunks, {
          type: 'audio/wav'
        });

        setAudio(true)
        // @ts-ignore
        document.getElementById('recordedAudio').src = URL.createObjectURL(voiceBlob);
        // @ts-ignore
        document.getElementById('recordedAudio').controls = true;
        // @ts-ignore
        document.getElementById('recordedAudio').autoplay = true;

        sendData(voiceBlob)
      }
    }
  }

  function sendData(voiceBlob: any) {
    let fd = new FormData()
    fd.append('file', voiceBlob)

    axios.post('http://vahella.me:5000/', fd).then(response => console.log(response))
  }

  const play = () => {
    console.log('start')

    rec.start();
  }

  const stop = () => {
    console.log("stop")

    rec.stop();
  }

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
              {
                audio ? <audio id='recordedAudio'/> : 'Аудио описание'
              }
            </div>

            <div className='audio__options'>
              <div className='audio__btn'>
                <Close/>
              </div>

              <div className='audio__btn' onClick={play}>
                <Play/>
              </div>

              <div className='audio__btn' onClick={stop}>
                <Stop/>
              </div>

              <div className='audio__btn'>
                <Pause/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddTask