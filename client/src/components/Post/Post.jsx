import React from 'react'
import './Post.css'
function Post() {
    return (
        <div className="post">
            <img className="postImg"
                src="https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"/>
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Spice</span>
                    <span className="postCategory">Sweet</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit
                </span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi non saepe assumenda sapiente perferendis, hic vitae doloremque nesciunt quis repudiandae quae molestias provident labore esse quas earum quisquam voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi non saepe assumenda sapiente perferendis, hic vitae doloremque nesciunt quis repudiandae quae molestias provident labore esse quas earum quisquam voluptatem.
            </p>
        </div>
    )
}

export default Post
