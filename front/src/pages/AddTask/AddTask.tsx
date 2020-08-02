import './AddTask.sass'
import axios from "axios";
import Input from "./Input";
import Play from "./svg/Play";
import Stop from "./svg/Stop";
import Pause from "./svg/Pause";
import Cancel from "./svg/Cancel";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Microphone from "./svg/Microphone";
import Btn from "../../components/ui/btn/Btn";
import { push } from "connected-react-router";
import Editor from "../../components/Editor/Editor";

const AddTask = () => {
  const [obj, setObj] = useState<any[]>([])
  const [title, setTitle] = useState<string>('')
  const [audio, setAudio] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('stop')
  const [description, setDescription] = useState<string>('')
  const [records, setRecords] = useState<string[] | number[]>([])

  const dispatch = useDispatch();
  const audioChunks: any = [];
  let rec: any;

  window.navigator.mediaDevices.getUserMedia({audio: true}).then(stream => handlerFunction(stream))

  const handlerFunction = (stream: any) => {
    // @ts-ignore
    rec = new MediaRecorder(stream);

    // rec.onstop = () => setStatus('stop');
    // rec.onstart = () => setStatus('play');
    // rec.onpause = () => setStatus('pause');
    // rec.onresume = () => setStatus('resume');

    if (status !== 'cancel') {
      rec.ondataavailable = (e: any) => {
        audioChunks.push(e.data);

        if (rec.state === "inactive") {
          const audioBlob = new Blob(audioChunks, {
            type: 'audio/wav'
          });

          setAudio(true)
          setObj(prevState => [...prevState, {
            src: URL.createObjectURL(audioBlob),
          }])

          sendData(audioBlob)
        }
      }
    }
    }

  const sendData = async (voiceBlob: any): Promise<void> => {
    let fd = new FormData()
    fd.append('file', voiceBlob)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    const response = await axios.post(' http://vahella.me:5000', fd, config)

    setRecords(prevState => [...prevState, response.data.id])
    setDescription(prevState => `${prevState} <p>${response.data.text}</p>`)
  }

  const play = () => {
    console.log('play')
    rec.start();
  };
  const stop = () => {
    console.log('stop')
    rec.stop();
  };
  const resume = () => {
    console.log('resume')
    rec.resume();
  };
  const pause = () => {
    console.log('pause')
    rec.pause();
  };
  const cancel = () => {
    console.log('cancel')
    setStatus('cancel')
    rec.stop();
  };

  const addNewTask = async () => {
    const data = {
      title,
      records,
      description,
      status: 0,
      ownerId: 1,
    }

    const response = await axios.post('http://vahella.me:8087/task', data)

    if (response.status === 200) {
      setObj([]);
      setTitle('');
      setRecords([]);
      setAudio(false);
      setDescription('');

      dispatch(push(`/task/${response.data.taskId}`))
    }
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

        <Editor
          value={description}
          set={setDescription}
        />

        <div className='audio'>
          <div className='audio__recorder'>
            <div className='audio__label'>
              {
                audio ? (
                  obj.map((item, i) => (
                    <audio
                      key={i}
                      src={item.src}
                      autoPlay={true}
                      controls={true}
                    />
                  ))
                ) : 'Аудио описание'
              }
            </div>

            <div className='audio__options'>
              <div className='audio__btn' onClick={cancel}>
                <Cancel/>
              </div>

              <div className='audio__btn' onClick={status !== 'pause' ? play : resume}>
                {
                  status === 'pause' ? <Play/> : <Microphone/>
                }
              </div>

              <div className='audio__btn' onClick={pause}>
                <Stop/>
              </div>

              <div className='audio__btn' onClick={stop}>
                <Pause/>
              </div>
            </div>
          </div>

        </div>

        <Btn
          text='Сохранить'
          onclick={addNewTask}
          style={{margin: '0 auto'}}
        />
      </div>
    </div>
  )
}

export default AddTask