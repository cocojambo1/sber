import './AddTask.sass'
import Input from "./Input";
import React, { useState } from "react";
import RichEditorExample from "../../components/Editor/Editor";
import TextareaAutosize from 'react-textarea-autosize';
import Microphone from "./svg/Microphone";
import Pause from "./svg/Pause";
import Cancel from "./svg/Cancel";
import Stop from "./svg/Stop";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState<string>('')
  const [audio, setAudio] = useState<boolean>(false)
  const [description, setDescription] = useState<string>('')
  const audioChunks: any = [];
  let rec: any;

  window.navigator.mediaDevices.getUserMedia({audio: true}).then(stream => handlerFunction(stream))

  const handlerFunction = (stream: any) => {
    // @ts-ignore
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e: any) => {
      audioChunks.push(e.data);

      if (rec.state === "inactive") {
        const audioBlob = new Blob(audioChunks, {
          type: 'audio/wav'
        });

        setAudio(true)
        // @ts-ignore
        document.getElementById('recordedAudio').src = URL.createObjectURL(audioBlob);
        // @ts-ignore
        document.getElementById('recordedAudio').controls = true;
        // @ts-ignore
        document.getElementById('recordedAudio').autoplay = true;

        sendData(audioBlob)
      }
    }
  }

  const sendData = async (voiceBlob: any): Promise<void> => {
    let fd = new FormData()
    fd.append('file', voiceBlob)

    //http://vahella.me:8087/upload
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    const response = await axios.post(' http://vahella.me:5000', fd, config)

    console.log(response);

    setDescription(prevState => `${prevState} 
    ${response.data.text}`)
  }

  const play = () => {
    console.log('start')

    rec.start();
  }

  const stop = () => {
    console.log("stop")

    rec.stop();
  }

  const pause = () => {
    console.log('pause')

    rec.pause();
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

        <TextareaAutosize
          minRows={10}
          maxRows={35}
          value={description}
          placeholder='Описание задачи'
          onChange={e => setDescription(e.target.value)}
        />

        <div className='audio'>
          <div className='audio__recorder'>
            <div className='audio__label'>
              {
                audio ? <audio id='recordedAudio'/> : 'Аудио описание'
              }
            </div>

            <div className='audio__options'>
              <div className='audio__btn'>
                <Cancel/>
              </div>

              <div className='audio__btn' onClick={play}>
                <Microphone/>
              </div>

              <div className='audio__btn'>
                <Stop/>
              </div>

              <div className='audio__btn' onClick={stop}>
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