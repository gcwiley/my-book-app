const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
// define a new router
const router = new express.Router()

// Route to create a new user - SIGN UP USER
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        // generate a token for the saved users
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

// Route that allows users to log in - LOG IN USER
// login request generates and stores a authenitcation token and send it back to client
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // function that returns token and is sent to the user
        const token = await user.generateAuthToken()
        // send back object with two properties - user and token
        res.send({ user, token })
    } catch (error) {
        res.status(400).send()
    }
})

// Route that allows user to log out - LOG OUT
router.post('/users/logout', auth, async (req, res) => {
    try {
        // removing a given item from the tokens array - using array filter method
        // set tokens array to filtered version of itself
        req.user.tokens = req.user.tokens.filter((token) => {
            // return true when the token that we are currently looking at is not the one used for authenication
            return token.token !== req.token
        })
        // save to database
        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// Route that allows user to log out of all sessions - LOG OUT ALL SESSIONS
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        // wipe the tokens array creates an empty array
        req.user.tokens = []
        // save to database
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler that user to get profile when they are authenticated - GET USER PROFILE
router.get('/users/me', auth, async (req, res) => {
    // sends back user profile
    res.send(req.user)
})

// Route handler to update a individual user - UPDATE USER PROFILE
router.patch('/users/me', auth, async (req, res) => {
    // Error handling - making sure the user is using the operation correctly
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        // iterate over updates that are being applied
        updates.forEach((update) => req.user[update] = req.body[update])

        // save to datebase
        await req.user.save()

        // send updated user back to client
        res.send(req.user)
    } catch (error) {
        // if something goes wrong - like a validation issue
        res.status(400).send(error)
    }
})

// Route handler to allow logged in user to delete own profile - DELETE USER PROFILE
router.delete('/users/me', auth, async (req, res) => {
    try {
        // remove user who is authenticated
        await req.user.remove()

        res.send(req.user)
    } catch (error) {
        res.status(500).send()
    }
})

// export the router to be used
module.exports = router
