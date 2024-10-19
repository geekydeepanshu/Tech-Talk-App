const express = require('express');
const { 
    createPost, 
    getAllPosts, 
    getPostById, 
    updatePost, 
    deletePost 
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Route for creating a new post
router.post('/createPost', createPost);  // Protected route

// Route for getting all posts
router.get('/', getAllPosts);

// Route for getting a single post by ID
router.get('/:id', getPostById);

// Route for updating a post by ID
router.put('/:id', protect, updatePost);  // Protected route

// Route for deleting a post by ID
router.delete('/:id', protect, deletePost);  // Protected route

module.exports = router;
