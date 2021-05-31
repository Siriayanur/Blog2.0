import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import './Settings.css'
function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                     <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" action="">
                    <label htmlFor="" >Profile Picture</label>
                     <div className="settingsPP">
                        <img
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
                        />
                    </div>
                     <label>Username</label>
                    <input type="text" placeholder="Siri Ayanur" name="name" className="settingsInputBox"/>
                    <label>Email</label>
                    <input type="email" placeholder="meemusiri@gmail.com" name="email" className="settingsInputBox"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" className="settingsInputBox"/>
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            
            <Sidebar />
            
        </div>
    )
}

export default Settings
