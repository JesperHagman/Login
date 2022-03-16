import React from 'react'
import { Link } from "react-router-dom"


function ProfilePage() {


  return (
    <div className="welcome">
      <h2>Welcome, User</h2>
      <button> <Link  to="/"> Log Out </Link> </button>
    </div>
  )
}

export default ProfilePage