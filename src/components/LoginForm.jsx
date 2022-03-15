import React, { useState} from 'react'
import { Link } from "react-router-dom"

function LoginForm({error}) {
    const [details, setDetails] = useState({name: "", email: "", password: "", lastname: ""})
    const submitText = document.getElementById("message")

    const loginHandler = e => {
        e.preventDefault()

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
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            submitText.innerHTML = data.message // Adding a status text to your registration
        })
    }
     
  return (
    <form onSubmit={loginHandler}>
        <div className="form-inner">
            <h2>Login</h2> 
            <h5><Link to="/about"> Sign up </Link></h5>
            <p id='message'> </p>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            

            <input type="submit" value="LOGIN" />
        </div>

    </form>

  )
  
}

export default LoginForm