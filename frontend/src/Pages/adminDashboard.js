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
    <AdminInfoBox Title = "Pending Pickups:"/>
    <AdminInfoBox Title = "Total statistics:"/>
    <AdminInfoBox Title = "No of trucks:"/>
    <AdminInfoBox Title = "No of workers:"/>
    </div>
    </div>
  </>
  )
}

export default AdminDashboard