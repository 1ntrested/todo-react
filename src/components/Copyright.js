import React from 'react'
import './Copyright.css';
const name='Balraj';
const currentDate = new Date();
const year = currentDate.getFullYear();
function Copyright() {
  return (
    <div className='copy'>
        <p>Created by {name}</p>
        <p >Copyright@ {year}</p>
    </div>
  )
}

export default Copyright;
