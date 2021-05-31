import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './SinglePost.css'
function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImage" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
                <h2 className="singlePostTitle">
                    Lorem ipsum dolor, sit
                     <div className="singlePostEdit">
                        <EditOutlinedIcon style={{marginLeft:'10px', cursor:'pointer'}} />
                        <DeleteOutlineIcon style={{marginLeft:'10px',cursor:'pointer'}} />
                     </div>
                </h2>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"><b>Siri Ayanur</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deserunt labore! Veritatis, atque nemo? Eaque enim sequi praesentium sapiente, quod cumque aperiam? Dolore nesciunt perspiciatis quod autem doloribus ullam hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deserunt labore! Veritatis, atque nemo? Eaque enim sequi praesentium sapiente, quod cumque aperiam? Dolore nesciunt perspiciatis quod autem doloribus ullam hicLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deserunt labore! Veritatis, atque nemo? Eaque enim sequi praesentium sapiente, quod cumque aperiam? Dolore nesciunt perspiciatis quod autem doloribus ullam hicLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deserunt labore! Veritatis, atque nemo? Eaque enim sequi praesentium sapiente, quod cumque aperiam? Dolore nesciunt perspiciatis quod autem doloribus ullam hic
                </p>
            </div>
        </div>
    )
}

export default SinglePost
