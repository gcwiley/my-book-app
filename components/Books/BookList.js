import Link from 'next/link';

// Material UI Components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3)
    }
}));

export default function BookList({ books }) {

    const classes = useStyles()

    return (
        <>
            <h1>My Books</h1>
            
            {books.map((book) => (
                <div key={book._id}>

                <Card className={classes.card}>

                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {book.title}
                        </Typography>

                        <Typography>
                            {book.author}
                        </Typography> 

                    </CardContent>
                    
                    <CardActions>

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

                    </CardActions>  

                </Card>
            
                </div>
            ))}
        </>
    )
}

