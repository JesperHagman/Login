import React, { useState }  from 'react'
import LoginForm from '../LoginForm'

export default function LoginPage() {
  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState ("")

  const Login = details => {    
    const user = {
      name: details.name,
      lastname: details.lastname,
      email: details.email,
      password: details.password
  }
  }
   
 
  return (
    <div>
        <div className="App">
            <LoginForm Login={Login} error={error} />
        </div>
    </div>
  )
}
