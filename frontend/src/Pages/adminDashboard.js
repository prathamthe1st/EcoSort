import React from 'react'
import Nav from '../components/nav'
import Admindetails from '../components/admindetails'
import AdminInfoBox from '../components/adminInfobox'

function AdminDashboard() {

 


  return (
    <>
    <Nav/>
    <div className='adminBody'>
    <Admindetails/>
    <div className='adminBodyRight'>
    <a><AdminInfoBox Route="/pickups" Title = "Pending Pickups:"/></a>
    <a><AdminInfoBox Route="/stats" Title = "Total statistics:"/></a> 
    <a><AdminInfoBox Route="/trucks" Title = "Trucks tracker:"/></a> 
    <a><AdminInfoBox Route="/workforce" Title = "Workforce:"/></a> 
    </div>
    </div>
  </>
  )
}

export default AdminDashboard