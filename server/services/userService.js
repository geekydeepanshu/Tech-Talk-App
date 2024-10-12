const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// Register a new user
const registerUser = asyncHandler(async (username, email, password) => {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    // Create new user
    const user = new User({ username, email, password });
    await user.save();
    return user;
});

// Login a user
const loginUser = asyncHandler(async (email, password) => {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    } else {
        throw new Error('Invalid email or password');
    }
});

// Find a user by ID
const getUserById = asyncHandler(async (userId) => {
    const user = await User.findById(userId).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
});

module.exports = {
    registerUser,
    loginUser,
    getUserById,
};
