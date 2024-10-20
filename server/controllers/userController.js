const userService = require('../services/userService');
const asyncHandler = require('express-async-handler');
const { registerUserSchema, loginUserSchema, updateUserSchema } = require('../validators/userValidator');

// Controller for registering a new user
const registerUser = asyncHandler(async (req, res) => {
    const { error, value } = registerUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const user = await userService.registerUser(value);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Controller for logging in a user
const loginUser = asyncHandler(async (req, res) => {
    const { error, value } = loginUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // const { email, password } = value;
        const user = await userService.loginUser(value);
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// Controller for getting a user's profile by ID
const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User retrieved successfully', user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Controller for updating user profile
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const { error, value } = updateUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const updatedUser = await userService.updateUser(id, value);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Controller for deleting a user
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userService.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = {
    registerUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser
};
