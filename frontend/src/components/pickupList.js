

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PickupList() {
  const [pickup, setPickup] = useState([]);

  useEffect(() => {
    async function fetchPickup() {
      const response = await axios.get('http://127.0.0.1:8000/pickup/');
      setPickup(response.data);
      console.log(response.data);
    }
    fetchPickup();
  }, []);
  return (
  
    <div className='pickUpList'>
    <h1>Pickups</h1>
    <ul>
    {pickup.map((pickup) => (
      <div className='list' key={pickup.pickup_id}>
        <li>{pickup.location}</li>
        {/* <button>Edit</button> */}
        {/* <button onClick={()=>handleDelete(garbageTruck.truck_id)}>-</button> */}
      </div>
      
    ))
    }
    </ul>

  </div>
  )
}

export default PickupList