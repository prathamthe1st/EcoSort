import {React,useEffect, useState} from 'react'
import Nav from '../components/nav'
import Admindetails from '../components/admindetails'
import AdminInfoBox from '../components/adminInfobox'
import axios from 'axios'


function AdminDashboard() {

  const[data,setData] = useState('');

  useEffect(() => {
    async function fetchstats() {
      const response = await axios.get('http://127.0.0.1:8000/statistics/');
      setData(response.data);
      console.log(response.data);
    }
    fetchstats();
  }, []);

 


  return (
    <>
    <Nav/>
    <div className='adminBody'>
    <Admindetails/>
    <div className='adminBodyRight'>
    <a><AdminInfoBox Route="/pickups" Title = "Pending Pickups:" data ={data.pickup_count}/></a>
    <a><AdminInfoBox Route="/stats" Title = "Total statistics:"/></a> 
    <a><AdminInfoBox Route="/trucks" Title = "Trucks tracker:" data ={data.truck_count}/></a> 
    <a><AdminInfoBox Route="/workforce" Title = "Workforce:" data ={data.employee_count}/></a> 
    </div>
    </div>
  </>
  )
}

export default AdminDashboard