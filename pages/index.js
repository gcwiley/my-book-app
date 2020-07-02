import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import Book from '../models/Book';

// Material UI Components
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import NavBar from '../test/NavBar';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    
    cardGrid: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        height: '100%',
    }
}));

export default function Home({ books }) {

    const classes = useStyles()

    return (
        <>
            <NavBar />
            {books.map((book) => (
                <div key={book.id}>
                    <Typography variant="h4" component="h2">
                        {book.title}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {book.author}
                    </Typography>
                    <div>
                        <Link href="/[id]" as={`/${book._id}`} passHref>
                            <Button 
                                size="small" 
                                color="primary"
                                component="a"
                                variant="outlined"
                            >
                                View
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    ) 
}

// Retrieves book(s) data from mongodb database 
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