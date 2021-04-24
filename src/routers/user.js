const express = require('express')
const User = require('../models/user')
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

// Route handler for fetching all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to fetch individual user by ID
router.get('/users/:id', async (req, res) => {
    const _id = req.params._id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to update a individual user - UPDATE USER
router.patch('/users/:id', async (req, res) => {
    // Error handling - making sure the user is using the operation correctly
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        const user = await User.findById(req.params.id)

        // iterate over updates that are being applied
        updates.forEach((update) => user[update] = req.body[update])

        // save to datebase
        await user.save()

        // no user to update with that ID
        if (!user) {
            return res.status(404).send()
        }

        // send updated user back
        res.send(user)
    } catch (error) {
        // if something goes wrong - like a validation issue
        res.status(400).send(error)
    }
})

// Route handler to delete a user by ID
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

// export the router to be used
module.exports = router
