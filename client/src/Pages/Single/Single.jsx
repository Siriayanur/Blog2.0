import React from 'react'
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';
function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar/>
        </div>
    )
}

export default Single
