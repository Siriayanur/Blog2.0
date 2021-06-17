const express = require('express')
const router = express.Router();
const User = require('../models/User.js');
const Post = require('../models/Post.js');

const bcrypt = require('bcrypt')
//update user profile
router.put('/:id', async (req, res) =>
{
    if (req.body.userId === req.params.id)
    {
        //If the password needs to be updated
        if (req.body.password)
        {
            const salt = await bcrypt.genSalt(8);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try
        {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            },{new : true})
            res.status(200).send(updateUser);
        } catch (e)
        {
            res.send(e);
        }
    } else
    {
        res.send('You can update only your account');
    }
})

//delete
router.delete('/:id', async (req, res) =>
{
    if (req.params.id === req.body.userId)
    {
        const user = await User.findById(req.params.id);
        if (!user)
        {
            return res.status(400).send('No user exists')
        }
        try
        {
            //delete the user along with his posts
            await Post.deleteMany({username : user.username})
            await User.findByIdAndDelete(req.params.id);
            res.status(200).send('account deleted successfully')
        } catch (e)
        {
            res.send(e);
        }
    } else
    {
        res.status(403).send('You can delete only your account');
    }
    

})

//Get all users who are currently registered 
router.get('/', async (req, res) =>
{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send(e);
    }
})

//Get user
router.get('/:id', async (req, res) =>
{
    try
    {
        const user = await User.findById(req.params.id);
        if (!user)
        {
            res.status(400).send('no user exists')
        }
        const { password, ...otherStuff } = user._doc;
        res.status(200).send(otherStuff);
    } catch (e)
    {
        res.json(err)
    }
})
module.exports = router