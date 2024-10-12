const express = require('express');
const { register, login, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);  // Protected route

module.exports = router;
