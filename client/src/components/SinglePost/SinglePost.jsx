import React, { useContext, useEffect,useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './SinglePost.css'
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { Input } from '@material-ui/core';
function SinglePost()
{

    const {user} = useContext(Context)
    const PF = 'http://localhost:5000/images/';

    const location = useLocation() //URL which was visited
    const path = location.pathname.split('/')[2]; //This gives the post ID
    const [post, setPost] = useState({})
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(() =>
    {
        const getPosts = async () =>
        {
            const res = await axios.get('http://localhost:5000/api/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPosts();
    }, [path])
    
    const handleDelete = async () =>
    {
        try
        {
            console.log('came here')
            /**
             * Since it is delete method, external data should be sent by specifying data : {}
             */
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{data : {username : user.username}}/* this is sent as req.body */ );
            //can also use post._id instead of path
            window.location.replace('/')
        } catch (e)
        {
            console.log(e);
        }
    }

    const handleUpdate = async () =>
    {
        try
        {
            const res = await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
                    title,
                    desc,
                    username: user.username
            })
            setUpdateMode(false);
            // console.log(res);
            
        } catch (e)
        {
            console.log(e);
        }
    }


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img className="singlePostImage" src={PF+post.photo} alt="" />}
                {
                    updateMode
                        ?
                        (
                            <input
                                className="singlePostTitleInput"
                                type="text" value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                            />
                        )
                        :
                        (
                            <h2 className="singlePostTitle">
                                {title}
                                {post.username === user.username &&
                                    <div className="singlePostEdit">
                                    <EditOutlinedIcon style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={ () => {setUpdateMode(true)}}/>
                                    <DeleteOutlineIcon style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={ handleDelete}/>
                                    </div>
                                }
                            </h2>
                        )
                }
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        <Link to={`/?user=${post.username}`} style={{textDecoration : 'none',color:'inherit'}}>
                            <b> {post.username} </b>
                        </Link>
                    </span>
                    <span className="singlePostDate"> {new Date(post.createdAt).toDateString()} </span>
                </div>
                {
                    updateMode
                        ?
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} cols={30} rows={5} className="singlePostDescInput"/>
                        :
                        (
                            <p className="singlePostDesc">
                                {desc}
                            </p>
                        )
                }
                {updateMode && <button className="singlePostUpdateButton" onClick={handleUpdate}>UPDATE</button>} 
            </div>
        </div>
    )
}

export default SinglePost
//https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80