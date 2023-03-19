import React from 'react'
import Nav from '../components/nav'


function UserDashboard() {
  return (
    <div className='userDashboard'>
    <h1>Hello, Pratham</h1><hr/>
    <p>Waste Reported</p>
    <img src="/garbagegraph.png" alt='graph'/>
    <p>Leaderboard</p>
    <img src='/leader.png'/>
    <p>Be the reason of a good cause</p>
    <a href='/report'><img src='/report.png'/></a>
  
    </div>
  );
}

export default UserDashboard