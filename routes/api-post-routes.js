const express = require('express');
const {
  getPost, 
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require('../controllers/api-post-controllers');

const router = express.Router();

//---GET ALL POSTS 
router.get('/api/posts', getPosts);
//---ADD NEW POST
router.post('/api/post', addPost);
//---GET POST BY ID
router.get('/api/post/:id', getPost);
//---DELETE POST BY ID
router.delete('/api/post/:id', deletePost);
//---UPDATE POST BY ID
router.put('/api/post/:id', editPost);

module.exports = router;

