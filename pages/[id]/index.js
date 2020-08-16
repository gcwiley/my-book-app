import dbConnect from '../../utils/dbConnect';
import Book from '../../models/Book';

import { Paper } from '@material-ui/core'

// Import Book Layout Components
import BookDetails from '../../components/Books/BookDetails';
import BookActions from '../../components/Books/BookActions';

export default function BookPage ({ book }) {

    return (
            <Paper >
                <BookDetails book={book} /> 
                <BookActions book={book} />
            </Paper>
    )
}

export async function getServerSideProps({ params }) {
    await dbConnect()

    const book = await Book.findById(params.id).lean()
    book._id = book._id.toString()

    return { props: { book }}
}