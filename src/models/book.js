const mongoose = require('mongoose')

// Define the Book model

const Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    pages: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('pages must be a positive number')
            }
        }
    }
})

module.exports = Book

