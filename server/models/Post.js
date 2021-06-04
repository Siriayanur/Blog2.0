const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required : true
    },
    categories: {
        type: Array,
    },
    bgColor: {
        type: String,
        default: ''
    }

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;