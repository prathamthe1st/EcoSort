
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmpList() {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    async function fetchGarbageTrucks() {
      const response = await axios.get('http://127.0.0.1:8000/emp/');
      setEmp(response.data);
      console.log(response.data);
    }
    fetchGarbageTrucks();
  }, []);


  const handleDelete = (empId) => {
    axios.delete(`http://127.0.0.1:8000/truck/${empId}/`)
      .then(response => {
        console.log(response.data);
        setEmp(emp.filter(emp => emp.emp_id !== empId));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
  
    <div className='pickUpList'>
      <h1>List of Workers</h1>
      <ul>
      {emp.map((emp) => (
        <div className='list' key={emp.emp_id}>
          <li>{emp.emp_name}</li>
          <button>Edit</button>
          <button onClick={()=>handleDelete(emp.emp_id)}>-</button>
        </div>
        
      ))
      }
      </ul>
    </div>
  );
}

export default EmpList;