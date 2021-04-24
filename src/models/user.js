const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
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
    },
    // tokens is an array of objects - this is a value that will always be provided by the server
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// methods are accessible on the instances - called instance methods
// generate and return a token
userSchema.methods.generateAuthToken = async function () {
    const user = this

    // generate a JSON web token - use toString() to convert ObjectID to standard string
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    // add the newly generated token to the tokens array and then save the user to the database
    // concatinating the item onto the array
    user.tokens = user.tokens.concat({ token: token })

    // save token to database
    await user.save()

    return token
}

// statics methods are accessible on the models - called model methods
userSchema.statics.findByCredentials = async (email, password) => {
    // find user by email w/ findOne 
    const user = await User.findOne({ email: email })

    // if not user with that email if found - throw error
    if (!user) {
        throw new Error('Unable to login')
    }

    // if user is found then verify if password is correct
    const isMatch = await bcrypt.compare(password, user.password)

    // if password is not a match
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    // return user if user was found and password is correct
    return user
}

// hash the plain text password before saving
// use method on userSchema to set up Middleware - this must be a standard function b/c arrow functions dont bind "this"
userSchema.pre('save', async function (next) {
    // "this" = document being saved
    const user = this

    // make sure the password is actually being changed - if user has modified password property
    if (user.isModified('password')) {
        // taking plain text password and hashing it - then hashed password overrides plain text password
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User