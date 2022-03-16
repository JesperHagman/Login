import React, { useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

function RegisterForm() {
    const [details, setDetails] = useState({name: "", email: "", password: "", lastname: ""})
    const submitText = document.getElementById("message")
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault()

        const user = {
            name: details.name,
            lastname: details.lastname,
            email: details.email,
            password: details.password
        }
        fetch('/api/register', {
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
            if(data.registered === true) {
                navigate('/Loginform')
            } 
        })
    }
    
    return (
        <form onSubmit={registerHandler}>
        <div className="form-inner">
            <h2>Register</h2> 
            <h5><Link to="/home"> Login </Link></h5>
            <p id='message'> </p> {/* succes or error message */}
            
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" required onChange={e =>setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div className="form-group">
                <label htmlFor='lastname'>Lastname:</label>
                <input type="text" lastname="lastname" id="lastname" required onChange={e =>setDetails({...details, lastname: e.target.value})} value={details.lastname}/>
            </div>

            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="text" email="email" id="email" required onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>

            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" password="password" id="password" required onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input type="submit" value="REGISTER" />
        </div>

    </form>
  )
}

export default RegisterForm