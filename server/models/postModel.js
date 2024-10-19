const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [5, 'Title must be at least 5 characters long'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        match: [/^https?:\/\/.*\.(jpeg|jpg|png|gif)$/, 'Image must be a valid URL of a jpg, png, or gif file'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
});

module.exports = mongoose.model('Post', postSchema);
