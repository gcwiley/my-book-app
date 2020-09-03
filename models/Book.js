import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

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
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
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
}
)

export default mongoose.models.Book || mongoose.model('Book', BookSchema);