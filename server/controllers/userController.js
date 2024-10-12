const { registerUser, loginUser, getUserById } = require('../services/userService');
const asyncHandler = require('express-async-handler');

// Controller for registering a new user
const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await registerUser(username, email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Controller for logging in a user
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, token } = await loginUser(email, password);
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Controller for getting user details by ID
const getUserProfile = asyncHandler(async (req, res) => {
    try {
        const user = await getUserById(req.user._id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = { register, login, getUserProfile };
