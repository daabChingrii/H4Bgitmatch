const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: String,
    skills: [String],
    age: Number,
    bio: String,
    role: String,
    interest: {
        required: true,
        type: [String]
    },
    phone: Number,
    website: String,
    linkedin: String,
    github: String,
})

module.exports = mongoose.model('userProfiles', dataSchema);