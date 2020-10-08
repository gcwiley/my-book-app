import dbConnect from '../../utils/dbConnect';
import Book from '../../models/Book';

// Import Book Layout Components
import BookDetails from '../../components/Books/BookDetails';

export default function BookPage ({ book }) {

    return (
            <BookDetails book={book} /> 
    )
}

export async function getServerSideProps({ params }) {

    await dbConnect()

    const book = await Book.findById(params.id).lean()
    book._id = book._id.toString()

    return { props: { book }}
}