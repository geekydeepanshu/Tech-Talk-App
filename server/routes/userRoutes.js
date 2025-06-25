const express = require('express');
const {
    registerUser,
    loginUser,
    getUserById,
    updateUser,
    updateUserBio,
    deleteUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Log in a user
router.post('/login', loginUser);

// Get user by ID (protected route)
router.get('/:id', protect, getUserById);


// Update user by ID (protected route)
router.put('/:id', protect, updateUser);

// Update a user Bio
router.patch('/:id/bio', protect, updateUserBio);

// Delete user by ID (protected route)
router.delete('/:id', protect, deleteUser);

module.exports = router;
