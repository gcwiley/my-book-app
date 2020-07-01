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
        type: String,
        required: true,
        unique: true
    },
    year_published: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
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