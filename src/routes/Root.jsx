import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
const Root = () => {
  return (
  <div className="App container mt-4 p-1 d-flex shadow">
    <nav className="navbar bg-accept text-light mb-3">
    <ul className="navbar-nav me-auto " >
     <NavLink to={"/home"} className={({isActive})=>{
        isActive? "nav-item active" : "nav-item"
     }}>Home</NavLink>
     <NavLink to={"/home"} className={({isActive})=>{
        isActive? "nav-item active" : "nav-item"
     }}>Home</NavLink>
     <NavLink to={"/home"} className={({isActive})=>{
        isActive? "nav-item active" : "nav-item"
     }}>Home</NavLink>
     <NavLink to={"/home"} className={({isActive})=>{
        isActive? "nav-item active" : "nav-item"
     }}>Home</NavLink>

     </ul>

    </nav>
    
    <Outlet/>
    
    
    </div>


  )
}

export default Root
