const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
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
    pageCount: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Page count must be a positive number')
            }
        }
    },
    favorite: {
        type: Boolean,
        default: false
    },
    owner: {
        // data stored in owner is going to be an ObjectID
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // ref creates reference between this field and another model
        ref: 'User'
    }
}, {
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book

