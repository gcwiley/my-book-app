import Book from '../../../models/Book';
import dbConnect from '../../../utils/dbConnect';

// conects to the database
dbConnect();

// This gets all the book from the database
export default async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
}