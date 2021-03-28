const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Book = require('./models/book')

const app = express()

const port = process.env.PORT || 3000

// automatically parse incoming JSON to an object so we can access it in our request handlers
app.use(express.json())

// Route handler to create a new User
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// Route handler to fetching all users

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})