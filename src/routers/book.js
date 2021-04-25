const express = require('express')
const Book = require('../models/book')
const auth = require('../middleware/auth')
// define a new router
const router = new express.Router()

//  Route handler to create a new book - NEW BOOK
router.post('/books', auth, async (req, res) => {
    
    const book = new Book({
        // req.body plus owner property - using ES6 spread operator ""...""
        ...req.body,
        owner: req.user._id
    })

    try {
        await book.save()
        res.status(201).send(book)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Route handler for fetching all books - GET ALL BOOKS
router.get('/books', auth, async (req, res) => {
    try {
        // const books = await Book.find({ owner: req.user._id })
        await req.user.populate('books').execPopulate()
        res.send(req.user.books)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to fetch individual book by ID - GET BOOK BY ID
router.get('/books/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const book = await Book.findOne({ _id, owner: req.user._id })

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to update an existing book - UPDATE BOOK BY ID
router.patch('/books/:id', auth, async (req, res) => {
    // Error handling - make sure the user is running the operation correctly
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'author', 'pageCount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        // find book by ID and by owner value
        const book = await Book.findOne({ _id: req.params.id, owner: req.user._id })

        // if no book to update with that ID
        if (!book) {
            return res.status(404).send()
        }

        // iterate over updates that are being applied - use "forEach" to loop over updates
        updates.forEach((update) => book[update] = req.body[update])

        // save book to database
        await book.save()

        // success - send updated book back
        res.send(book)
    } catch (error) {
        // if something goes wrong - like a validation issue
        res.status(400).send(error)
    }
})

// Route handler to delete a book by ID - DELETE BOOK BY ID
router.delete('/books/:id', auth, async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        // if book not found
        if (!book) {
            res.status(404).send()
        }

        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

// export the router to be used
module.exports = router