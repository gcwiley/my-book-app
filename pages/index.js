import dbConnect from '../utils/dbConnect';
import Book from '../models/Book';

// Layout Components
import BookList from '../components/Index/BookList';

export default function Home({ books }) {

    return (
    <>
        <BookList books={books}/>
    </>
    );
}

// Retrieves Book(s) data from mongodb database
export async function getServerSideProps() {
    await dbConnect()

    // Find all the data in our database
    const result = await Book.find({})
    const books = result.map((doc) => {
        const book = doc.toObject()
        book._id = book._id.toString()
        return book
    })

    return { props: { books: books }}
}