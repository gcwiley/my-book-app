const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Your email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word "password.')
            }
        }
    }
})

// use a method on userSchema to set up middleware
// hashes the password - saves to database
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        // taking the plain text password and hashing it and then using the hash value to override the plain text value
        user.password = await bcrypt(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User