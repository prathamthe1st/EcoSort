

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TruckList() {
  const [garbageTrucks, setGarbageTrucks] = useState([]);

  useEffect(() => {
    async function fetchGarbageTrucks() {
      const response = await axios.get('http://127.0.0.1:8000/truck/');
      setGarbageTrucks(response.data);
      console.log(response.data);
    }
    fetchGarbageTrucks();
  }, []);


  const handleDelete = (truckId) => {
    axios.delete(`http://127.0.0.1:8000/truck/${truckId}/`)
      .then(response => {
        console.log(response.data);
        // Remove the deleted garbage truck from the state or perform other actions as needed
        setGarbageTrucks(garbageTrucks.filter(truck => truck.truck_id !== truckId));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
  
    <div className='pickUpList'>
      <h1>List of Garbage Trucks</h1>
      <ul>
      {garbageTrucks.map((garbageTruck) => (
        <div className='list' key={garbageTruck.truck_id}>
          <li>{garbageTruck.number_plate}</li>
          <button>Edit</button>
          <button onClick={()=>handleDelete(garbageTruck.truck_id)}>-</button>
        </div>
        
      ))
      }
      </ul>

    </div>
  );
}

export default TruckList;
