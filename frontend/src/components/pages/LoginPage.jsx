import React, { useState }  from 'react'
import LoginForm from '../LoginForm'
import LoggedInPage from './LoggedInPage'

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

      fetch('/api/login', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
      })
  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  if(true) {
    <LoggedInPage />
  } else {
    <LoginForm />
  }
 
  return (
    <div>
        <div className="App">
            {(user.email !== "") ? (
            <LoggedInPage/>
        ) : (
          <LoginForm Login={Login} error={error} />
      )}
    </div>
    </div>
  )
}
