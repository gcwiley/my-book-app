import dbConnect from '../../utils/dbConnect';
import Book from '../../models/Book';

// import Layout Components
import NavBar from '../../components/layout/NavBar';
import DeleteBook from '../../components/Books/DeleteBook';

// Material UI Components
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3), // fix this
        padding: theme.spacing(3)
    }
}))



export default function BookPage ({ book }) {

    const classes = useStyles()

    return (
        <Container maxWidth="md">
            <NavBar />
            <Paper variant="outlined" className={classes.paper}>

                <Typography variant="h2">
                    {book.title}
                </Typography>

                <Typography variant="h5" color="primary">
                    {book.author}
                </Typography>

                <Typography variant="subtitle1">
                    Published: {book.year_published}
                </Typography>

                <Typography variant="body2">
                    Page count: {book.number_of_pages}
                </Typography>

                <Typography variant="body2">
                    Genre: {book.genre}
                </Typography>

                <Typography variant="body2">
                    Summary: {book.summary}
                </Typography>

                <DeleteBook />
            
            </Paper>
        </Container>  
    )
}

export async function getServerSideProps({ params }) {
    await dbConnect()

    const book = await Book.findById(params.id).lean()
    book._id = book._id.toString()

    return { props: { book }}
}