const mongoose = require('mongoose');

const { genderEnum, roleEnum } = require('../utils/enum');


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: roleEnum,
      default: 'member'
    },
    gender: {
      type: String,
      required: true,
      enum: genderEnum,
      default: 'male'
    },
    age: {
      type: Number,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
