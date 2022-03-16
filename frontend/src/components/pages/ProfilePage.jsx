import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation} from "react-router-dom"



function ProfilePage() {

const location = useLocation()

  if (location.state && location.state.loggedIn) {
    return (
  
        <div className="welcome">
          <h1>Welcome User</h1>
          <button> <Link to="/">Sign Out</Link> </button>
        </div>
  
    );
  } else {

    return ( 

    <div className='welcome'>
    <h2> Please Sign in or register before visiting this page </h2>
    <button><Link to="/">Sign in</Link></button>  <button> <Link to="/about" >Register</Link> </button> 
    </div>
    
    )
  }
} 


export default ProfilePage