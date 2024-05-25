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


// DOESNT SEEM TO WORK YET, FIND A SOLUTIOn
router.delete('/blog/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findByPk(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    await res.json({ success: true });
  } catch (error) {
    console.error("Error deleting the blog", error);
    res.status(500).json({ error: 'Internal Server error' });
  }
});





module.exports = router;
