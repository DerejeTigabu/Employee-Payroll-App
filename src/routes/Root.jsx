import React,{useContext} from 'react'
import {AuthenticationContext} from '../context/AuthenticationContext'
import { Outlet,NavLink } from 'react-router-dom'
const Root = () => {
   const authenticator=useContext(AuthenticationContext);
  return (
  <div className="App container mt-4 p-1 d-flex shadow">
    <nav className="navbar bg-accept text-light mb-3">
    <ul className="navbar-nav me-auto " >
     
     {/* home */}
     <NavLink to={`/home/`} className={({isActive})=>
        isActive? "nav-item active" : "nav-item"
     }>Home</NavLink>{" "}

     {/* about */}
     <NavLink to={`/about/`} className={({isActive})=>
        isActive? "nav-item active" : "nav-item"
     }>About</NavLink>{" "}
      
      {/* contact */}
      <NavLink to={`/contact/`} className={({isActive})=>
        isActive? "nav-item active" : "nav-item"
     }>Contact</NavLink>{" "}
     
     {/* personal */}
     
     {authenticator.isAuthenticated && <NavLink to={`/personal/`} className={({isActive})=>
        isActive? "nav-item active" : "nav-item"
     }>Personal</NavLink>}
     {" "}
      
      {/* logout */}
     
      {authenticator.isAuthenticated && <NavLink 
      className={"text-warning"} onClick={authenticator.logout}>Logout</NavLink>}
    

     </ul>

    </nav>
    
    <Outlet/>
    
    
    </div>


  )
}

export default Root
