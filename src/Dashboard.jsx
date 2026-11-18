import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div  className='d-flex justify-content-between align-items-center'>
        <Sidenav/>
       
        <div style={{width:"1900px", height:"100vh", border:"3px solid black"}}>
            <Navbar/>
           <div>
             <Outlet/>
           </div>
        </div>
    </div>
  )
}

export default Dashboard