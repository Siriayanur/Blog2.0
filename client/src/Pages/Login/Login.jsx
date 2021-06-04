import React, { useContext, useRef } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';
function Login()
{
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { user, isFetching, dispatch } = useContext(Context);
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' })
        try
        {
            const result = await axios.post('http://localhost:5000/api/auth/login', {
                username: usernameRef.current.value,
                password : passwordRef.current.value
            })
            dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        } catch (e)
        {
            dispatch({ type: 'LOGIN_FAILURE' });
            
        }
        //Check this after refresh ... It will be there.. if this date is stored in localStorage
        console.log(user);
    }
    return (
        <div className="login">
            <span className="loginTitle">
                <b>LOGIN</b>
            </span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input className="loginInput" type="text" placeholder="Your username.." ref={ usernameRef}/>
                 <label htmlFor="">Password</label>
                <input className="loginInput" type="password" minLength={6} ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>LOGIN</button>
            </form>
            <button className="loginRegisterButton"><Link to="/register" style={{textDecoration: 'none', color: 'inherit'}}>Register</Link></button>
        </div>
    )
}

export default Login
