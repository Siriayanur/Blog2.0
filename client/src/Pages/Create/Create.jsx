import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import './Create.css';

function Create() {
    return (
        <div className="create">
            <img className="postImage" src="https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" />
            <form className="createForm">
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <AddCircleOutlineIcon fontSize="large" style={{ color: '#00adb5',cursor:'pointer',display: 'flex',alignItems:'center',justifyContent: 'center'}}/>
                    </label>
                    <input type="file"  id="fileInput" style={{ display: 'none' }}/>
                    <input type="text" placeholder="title.." id="" className="createInput" autoFocus={true}/>
                </div>
                <div className="createFormGroup">
                    <textarea name="" type="text" id="" cols="20" rows="10" placeholder="Share your experience.." className="createInput createText"></textarea>
                </div>
                <button className="createPublishButton">
                        POST
                    <WhatshotIcon />
                </button>
            </form>
            
        </div>
        
    )
}

export default Create
