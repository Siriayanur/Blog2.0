import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import './Settings.css'
import { Context } from '../../context/Context';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Settings()
{
    const { user, dispatch } = useContext(Context);
    const PF = 'http://localhost:5000/images/'
    // console.log(user);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [updated, setUpdated] = useState(false);
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        dispatch({type : 'UPDATE_START'})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if (file)
        {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePicture = filename;
            try
            {
                await axios.post('http://localhost:5000/api/upload', data);
                console.log('success');
            } catch (e)
            {
                console.log(e);
            }
        }
        try
        {
            const res = await axios.put(`http://localhost:5000/api/users/${user._id}`, updatedUser);
            // console.log(updatedUser);
            console.log(res);
            setUpdated(true);
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });


        } catch (e)
        {
            console.log(e);
            dispatch({type : 'UPDATE_FAILURE'})
        }
    }

    const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setUpdated(false);
    };
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                     <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                     <div className="settingsPP">
                        <img
                        src={(file && URL.createObjectURL(file)) || (user.profilePicture ? PF + user.profilePicture : PF + 'noDp.png')}
                        alt=""
                        />
                        <label htmlFor="fileInput">
                            <FaceOutlinedIcon fontSize="large" style={{color:'#00adb5',marginLeft:'10px',cursor:'pointer'}}/>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                            onChange={(e) => setFile(e.target.files[0])}    
                        />
                    </div>
                     <label>Username</label>
                    <input type="text" placeholder={user.username} name="name" className="settingsInputBox" onChange={(e) => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email" className="settingsInputBox"  onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" className="settingsInputBox"  onChange={(e) => setPassword(e.target.value)}/>
                    <button className="settingsSubmitButton" type="submit">
                        UPDATE
                    </button>
                </form>
                 <Snackbar open={updated} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Profile updated successfully
                    </Alert>
                </Snackbar>
            </div>
            
            <Sidebar />
            
        </div>
    )
}

export default Settings
