import React, { useState, useRef } from 'react';
import axios from 'axios';
function Camera() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const handleStartCamera = async () => {
    const constraints = { audio: false, video: true };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleStopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  const handleTakePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    axios.post('http://127.0.0.1:8000/pickup/', {
       dataURL
      }).then(res => {console.log('posting data', res);
      // setResponse(res.data);
     
    })
      .catch(err => console.error(err));
  };

  return (
    <div>
      {!stream && <button onClick={handleStartCamera}>Start Camera</button>}
      {stream && (
        <div>
          <video ref={videoRef} autoPlay />
          <button onClick={handleTakePhoto}>Take Photo</button>
          <button onClick={handleStopCamera}>Stop Camera</button>
        </div>
      )}
    </div>
  );
}

export default Camera;
