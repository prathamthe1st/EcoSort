import React, { useState } from 'react'
import axios from 'axios';
import Camera from '../components/camera';

function Report() {
    const[location,setLocation] = useState('');
    const[image,setImage] = useState('')
    const postData = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/pickup/', {
          location,
          image
        }).then(res => {console.log('posting data', res);
        // setResponse(res.data);
       
      })
        .catch(err => console.error(err));
      };
    
  return (
    <div className='report'>
        <h1>Report</h1>
        <img src='/reportwaste.png'></img>
        <form className='reportForm' onSubmit={postData}>
          
            <input className='reportInput' type="text" onChange={(event) => setLocation(event.target.value)} placeholder='Location'/>
            <input className='reportInput' type="text" onChange={(event) => setImage(event.target.value)} placeholder='Description'/>
            <button>Submit</button>
        </form>
        <Camera/>
    </div>
  )
}

export default Report