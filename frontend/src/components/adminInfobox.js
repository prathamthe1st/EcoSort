import React from 'react'
import Pickups from '../Pages/pickups'
import { Link } from 'react-router-dom';

function AdminInfoBox(props) {
  return (
    <div className='adminInfoBox'>
    <h2><Link to={props.Route}>{props.Title}</Link></h2>
    </div>
  )
}

export default AdminInfoBox