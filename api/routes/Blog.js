const express = require('express');
const router = express.Router();
const { Blog } = require('../models');


// Get all the blog posts
router.get('/', async (req, res) => {
     const listAllBlogs = await Blog.findAll();
     res.json(listAllBlogs);

});



router.post('/', async (req, res) => {
    const blog = req.body; // stores the values inside the body for example username, blogtitle etc

    await Blog.create(blog);

    res.json(blog);





});



module.exports = router;