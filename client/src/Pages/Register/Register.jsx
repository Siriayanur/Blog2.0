import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <span className="registerTitle">
                <b>Register</b>
            </span>
            <form action="" className="registerForm">
                <label htmlFor="">Email</label>
                <input className="registerInput" type="text" />
                 <label htmlFor="">Password</label>
                <input className="registerInput" type="text" />
                 <input className="registerButton" type="button" value="REGISTER"/>
            </form>
            <button className="registerRegisterButton"><Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>LOGIN</Link></button>
        </div>
    )
}

export default Register
