import React,{useContext, useState} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './Create.css';
import axios from 'axios';
import { Context } from '../../context/Context';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Create() {
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [bgColor, setBgColor] = useState('');
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
        const newPost = {
            title: title,
            desc: desc,
            username: user.username,
            bgColor: bgColor,
        };
        if (file)
        {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            console.log(newPost);
            try
            {
                await axios.post('http://localhost:5000/api/upload', data);
            }
            catch (e)
            {
                setError(true);
                console.log(e);
                
            }
        }
        try
        {
            const result = await axios.post('http://localhost:5000/api/posts/', newPost)
            window.location.replace('/posts/' + result.data._id);
            console.log(result);

        } catch (e)
        {
            setError(true);
            console.log(e);
        }
    }

    return (
        <div className="create">
            {file &&  <img className="postImage" src={URL.createObjectURL(file)} />}
           
            <div className="colorGrid">
                <div className="first">
                    <div className="firstFirst" onClick={ (e) => setBgColor('#b2b8a3')}/>
                    <div className="secondFirst" onClick={ (e) => setBgColor('#5e8b7e')}/>
                    <div className="thirdFirst" onClick={ (e) => setBgColor('#aad8d3')}/>
                </div>
                <div className="second">
                    <div className="firstSecond" onClick={ (e) => setBgColor('#deedf0')}/>
                    <div className="secondSecond" onClick={ (e) => setBgColor('#f4c7ab')}/>
                    <div className="thirdSecond" onClick={ (e) => setBgColor('#f1ca89')}/>

                </div>
            </div>
            <form className="createForm" onSubmit={handleSubmit}>
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <AddCircleOutlineIcon fontSize="large" style={{ color: '#00adb5',cursor:'pointer',display: 'flex',alignItems:'center',justifyContent: 'center'}}/>
                    </label>
                    <input type="file"  id="fileInput" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                    <input type="text" placeholder="title.." id="" className="createInput" autoFocus={true} onChange={e => setTitle(e.target.value)} value={title}/>
                        
                </div>
                <div className="createFormGroup">
                    <textarea name="" type="text" id="" cols="20" rows="9" placeholder="Share your experience.." className="createInput createText" onChange={e => setDesc(e.target.value)}>
                        {desc}
                    </textarea>
                </div>
                <button className="createPublishButton" type="submit">
                        POST
                    <WhatshotIcon />
                </button>
            </form>
            <Snackbar open={error} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Something went wrong !!
                </Alert>
            </Snackbar>
            
            
        </div>
        
    )
}

export default Create
