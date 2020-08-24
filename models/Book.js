import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    number_of_pages: {
        type: Number,
        required: true,
    },
    isbn: {
        type: Number,
        required: true,
        max: 9,
    },
    date_published: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    mediaUrl: {
        type: String,
        required: true
    }
}, 
    // gives us "createdAt" and "updatedAt" fields automatically
    { timestamps: true }
)

export default mongoose.models.Book || mongoose.model('Book', BookSchema);