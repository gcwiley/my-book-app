import dbConnect from '../utils/dbConnect';
import Book from '../models/Book';

// Material UI Components
import Container from '@material-ui/core/Container'

// Layout Components
import NavBar from '../components/layout/NavBar';
import BookList from '../components/Books/BookList';

export default function Home({ books }) {

    return (
    <>
        <Container maxWidth="md">
            <NavBar />
            <BookList books={books}/>
        </Container>
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