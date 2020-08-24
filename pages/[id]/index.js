import dbConnect from '../../utils/dbConnect';
import Book from '../../models/Book';

import { Paper, makeStyles } from '@material-ui/core'

// Import Book Layout Components
import BookDetails from '../../components/Books/BookDetails';
import BookActions from '../../components/Books/BookActions';

// CSS Stlyes go here
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
    }
})) 

export default function BookPage ({ book }) {

    const classes = useStyles();

    return (
            <Paper className={classes.paper}>
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