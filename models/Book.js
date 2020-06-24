import mongoose from 'mongoose'

const { String, Number } = mongoose.Schema.Types;

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    }
})