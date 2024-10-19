// validators/postValidator.js
const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().min(5).max(100).required().messages({
        'string.empty': 'Title is required',
        'string.min': 'Title must be at least 5 characters long',
        'string.max': 'Title cannot exceed 100 characters'
    }),
    image: Joi.string().pattern(/^https?:\/\/.*\.(jpeg|jpg|png|gif)$/).required().messages({
        'string.empty': 'Image URL is required',
        'string.pattern.base': 'Image must be a valid URL pointing to a jpg, png, or gif file'
    }),
    description: Joi.string().min(10).max(5000).required().messages({
        'string.empty': 'Description is required',
        'string.min': 'Description must be at least 10 characters long',
        'string.max': 'Description cannot exceed 1000 characters'
    }),
});

module.exports = postSchema;
