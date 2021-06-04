import React from 'react'
import Post from '../Post/Post'
import './Posts.css'
function Posts({posts}) {
    return (
        <div className="posts">
            {posts.map(post => <Post post={post }/>)}
        </div>
    )
}

export default Posts
