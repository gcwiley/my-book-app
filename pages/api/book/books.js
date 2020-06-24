// import { books } from '../../../data/books.json';

import Book from '../../../models/Book';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
}