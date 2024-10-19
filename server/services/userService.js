const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

// Register a new user
const registerUser = async (username, email, password) => {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    // Create a new user and save it to the database
    const user = new User({
        username,
        email,
        password
    });

    // Save the user
    const savedUser = await user.save();

    // Return user data along with generated token
    return {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        token: generateToken(savedUser._id), // Generate JWT token
    };
};

// Login a user
const loginUser = asyncHandler(async (username, email, password) => {
    const user = await User.findOne({$or: [{email: email},{username: username}]});
    if (user && (await bcrypt.compare(password, user.password))) {
        // Generate a JWT token
        const token = generateToken(user._id);
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
