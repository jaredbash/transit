/* This file is to tell the database how to store data that the user passes. */

const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email!'],
    unique: [true, 'Email already exists!']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: false
  }
})

/* Type in caps and singular, and it automatically searches for lowercase plural. It just be like that.
Creates a model, based on a schema, that */

// A model is a representation of the database as it exists on M
module.exports = Mongoose.model('User', userSchema)
