import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"



function ProfilePage() {

  const navigate = useNavigate();
const location = useLocation()



  if (location.state && location.state.loggedIn) {
    return (
  
        <div className="welcome">
          <h1>Welcome User</h1>
          <button> Log Out </button>
        </div>
  
    );
  } else {
    return navigate('/Loginform')
  }
} 


export default ProfilePage