import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Register()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setError(false);
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password
            });
            // console.log(res);
            res.data && window.location.replace('/login')
        } catch (e)
        {
            console.log(e);
            setError(true);
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">
                <b>Register</b>
            </span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input className="registerInput" type="text" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Username</label>
                <input type="text" className="registerInput" onChange={(e) => setUsername(e.target.value)} />
                 <label htmlFor="">Password</label>
                <input className="registerInput" type="password" minLength={6} onChange={(e) => setPassword(e.target.value)} />
                 <input className="registerButton" type="submit" value="REGISTER" />
            </form>
            <button className="registerRegisterButton">
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>LOGIN</Link>
            </button>
            <Snackbar open={error} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Something went wrong 
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Register
