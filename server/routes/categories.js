const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const Category = require('../models/Category.js');
//CREATE POST
router.post('/', async (req, res) =>
{
    const newCategory = new Category(req.body);
    try
    {
        const savedCategory = await newCategory.save();
        res.status(200).send(savedCategory);
    } catch (e)
    {
        res.send(e);
    }
})

router.get('/', async (req, res) =>
{
    try
    {
        const cat = await Category.find();
        res.status(200).send(cat);
    } catch (e)
    {
        res.send(e);
    }
})





module.exports = router;