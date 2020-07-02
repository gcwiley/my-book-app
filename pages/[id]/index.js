import dbConnect from '../../utils/dbConnect';
import Book from '../../models/Book';

export default function BookPage ({ book }) {

    return (
        <div>
            <h5>Book details</h5>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Published: {book.year_published}</p>
            <p>Page count: {book.number_of_pages}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Genre: {book.genre}</p>
            <p>Summary: {book.summary}</p>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    await dbConnect()

    const book = await Book.findById(params.id).lean()
    book._id = book._id.toString()

    return { props: { book }}
}