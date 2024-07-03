import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = ({ setter }) => {
    return (
        <div className='form'>
            <div className="user-name">
                <label htmlFor="username">Username</label>
                <input
                    id='username'
                    type="text"
                    placeholder='Enter username'
                    name='username'
                />
            </div>
            <div className="pass-word">
                <label htmlFor="password">Password</label>
                <input
                    id='password'
                    type="password"
                    placeholder='Enter password'
                    name='password'
                />
            </div>
            <div className='btn'>
                <span>Forgot password?</span> {/*Link here*/}
                <Link to="/"><button onClick={() => setter((prev) => !prev)}>Login</button></Link>
            </div>
        </div>
    )
}

export default Login
