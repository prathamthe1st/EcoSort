import React, { useState } from 'react';
import axios from 'axios';

function AddGarbageTruck() {
  const [numberPlate, setNumberPlate] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newGarbageTruck = { number_plate: numberPlate, max_capacity: maxCapacity };
    axios.post('http://127.0.0.1:8000/truck/', newGarbageTruck)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setNumberPlate('');
    setMaxCapacity('');
  }

  return (
    <div className='addGarbageTruck'>
      <h1>Add a new Garbage Truck</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='numberPlate'>Number Plate:</label>
        <input type='text' id='numberPlate' value={numberPlate} onChange={e => setNumberPlate(e.target.value)} />

        <label htmlFor='maxCapacity'>Max Capacity:</label>
        <input type='text' id='maxCapacity' value={maxCapacity} onChange={e => setMaxCapacity(e.target.value)} /><br/>
        <button type='submit'>Add</button>
      </form>
    {/* <a className='plusBtn' href='#addGarbageTruck'>+</a> */}

    </div>
  );
}

export default AddGarbageTruck;
