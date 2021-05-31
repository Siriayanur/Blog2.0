import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className="login">
            <span className="loginTitle">
                <b>LOGIN</b>
            </span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input className="loginInput" type="text" />
                 <label htmlFor="">Password</label>
                <input className="loginInput" type="text" />
                 <input className="loginButton" type="button" value="LOGIN"/>
            </form>
            <button className="loginRegisterButton"><Link to="/register" style={{textDecoration: 'none', color: 'inherit'}}>Register</Link></button>
        </div>
    )
}

export default Login
