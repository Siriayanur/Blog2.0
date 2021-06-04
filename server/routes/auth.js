const express = require('express')
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) =>
{
    
    try
    {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword
        })
        const userCreated = await user.save();
        res.status(200).send(userCreated);

    } catch (e)
    {
        res.status(500).send(e);
    }
    
})

//login
router.post('/login', async(req, res) =>
{
    try
    {
        const user = await User.findOne({ username: req.body.username })
        if (!user)
        {
            return res.status(400).send('Invalid username or password')
        }
        const isCorrectPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isCorrectPassword)
        {
            return res.status(404).send('Invalid email or password')
            
        }
        const { password, ...others } = user._doc;
        res.status(200).send(others)
    } catch (e)
    {
        res.send(e);
    }
})

module.exports = router