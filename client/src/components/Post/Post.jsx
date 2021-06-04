import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Post.css'
function Post({ post })
{
    const PF = 'http://localhost:5000/images/'
    return (
        <div className="post" style={{backgroundColor: `${post.bgColor}`}}>
            {post.photo && <img className="postImg"
                src= {PF + post.photo} />}
            
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map(c => <span className="postCategory">{c }</span>)}
                    
                </div>
                <span className="postTitle">
                    <Link to={`/posts/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
                        {post.title}
                    </Link>
                </span>
                <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}

export default Post

//"https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"