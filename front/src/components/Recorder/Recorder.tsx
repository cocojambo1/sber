import React from "react";
import './Recorder.sass'
import axios from 'axios'

const Recorder = () => {
  const record = document.getElementById('record')
  const stopRecord = document.getElementById('stopRecord')
  const recordedAudio = document.getElementById('recordedAudio')
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

    // // @ts-ignore
    // document.getElementById('record').disabled = true;
    // // @ts-ignore
    // document.getElementById('record').style.backgroundColor = "blue"
    // // @ts-ignore
    // document.getElementById('stopRecord').disabled = false;

    rec.start();
  }

  const stop = () => {
    console.log("stop")

    // // @ts-ignore
    // document.getElementById('record').disabled = false;
    // // @ts-ignore
    // document.getElementById('stopRecord').disabled = true;
    // // @ts-ignore
    // document.getElementById('record').style.backgroundColor = "red"

    rec.stop();
  }

  return (
    <>
      <h2>Record</h2>
      <p>
        <button id='record' onClick={play}/>
        <button id='stopRecord' onClick={stop}>Stop</button>
      </p>

      <p>
        <audio id='recordedAudio'></audio>
      </p>
    </>
  )
}

export default Recorder