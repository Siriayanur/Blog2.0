const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const User = require('../models/User.js');
//CREATE POST
router.post('/', async (req, res) =>
{
    try
    {
        const user = await User.findOne({ username: req.body.username })
        if (!user)
        {
            return res.status(400).send('Please register.')
        }
        const post = new Post(req.body);
        const savedPost = await post.save();
        res.status(200).send(savedPost);
    } catch (e)
    {
        res.status(500).send(e);
    }
})

//update post 
router.put('/:id', async (req, res) =>
{
    try
    {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username)
        {
            try
            {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                })
                res.status(200).send(updatedPost)
            } catch (e)
            {
                res.send(e);
            }
        } else
        {
            res.status(403).send('You edit only your post');

        }
        
    } catch (e)
    {
        res.status(500).send(e);
    }
})

//delete post
router.delete('/:id', async (req, res) =>
{
    try
    {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username)
        {
            try
            {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).send('Post deleted !')
            } catch (e)
            {
                res.send(e);
            }
        } else
        {
            res.status(403).send('You delete only your post');

        }
        
    } catch (e)
    {
        res.status(500).send(e);
    }
})

//GET POST
router.get('/:id', async (req, res) =>
{
    try
    {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    } catch (e)
    {
        
    }
})

//GET ALL POSTS
// router.get('/', async (req, res) =>
// {
//     const username = req.params.username;
//     const category = req.params.cat;
//     const color = req.params.color;
//     try
//     {
//         let posts;
//         if (username)
//         {
//             posts = await Post.find({username})
//         } else if (category)
//         {
//             posts = await Post.find({
//                 categories: {
//                     $in: [category]
//                 }
//             })
//         } else
//         {
//             posts = await Post.find()
//         }
//         res.status(200).send(posts)
//     } catch (e)
//     {
//         res.send(e);
//     }
// })
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;