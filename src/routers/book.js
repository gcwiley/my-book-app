const express = require('express')
const Book = require('../models/book')
// define a new router
const router = new express.Router()

//  Route handler to create a new book
router.post('/books', async (req, res) => {
    const book = new Book(req.body)

    try {
        await book.save()
        res.status(201).send(book)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Route handler for fetching all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find({})
        res.send(books)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to fetch individual book by ID
router.get('/books/:id', async (req, res) => {
    const _id = req.params._id

    try {
        const book = await Book.findById(_id)

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (error) {
        res.status(500).send()
    }
})

// Route handler to update an existing book
router.patch('/books/:id', async (req, res) => {
    // Error handling - make sure the user is running the operation correctly
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'author', 'pageCount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        // find book by ID
        const book = await Book.findById(req.params.id)

        // iterate over updates that are being applied - use "forEach" to loop over updates
        updates.forEach((update) => book[update] = req.body[update])

        // save book to database
        await book.save()

        // if no book to update with that ID
        if (!book) {
            return res.status(404).send()
        }

        // success - send updated book back
        res.send(book)
    } catch (error) {
        // if something goes wrong - like a validation issue
        res.status(400).send(error)
    }
})

// Route handler to delete a book by ID
router.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)

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