import Link from 'next/link';

// Material UI Components
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
    },
    card: {
        height: '100%',
    }
}));

export default function BookList({ books }) {

    console.log(books)

    const classes = useStyles()

    return (
        <>
            <h1>My Books</h1>
            
            {books.map((book) => (
                <div key={book._id}>

                    <Typography variant="h4" component="h2">
                        {book.title}
                    </Typography>

                    <Typography variant="h4" component="h2">
                        {book.author}
                    </Typography>
                
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
            ))}
        </>
    )
}

