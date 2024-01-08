const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
            default: 'member'
        },
        gender: {
            type: String,
            required: true,
            default: 'male'
        },
        age: {
            type: Number
        },
        userName: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
