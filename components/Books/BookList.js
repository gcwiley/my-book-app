import Link from 'next/link';

// Material UI Components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        marginTop: theme.spacing(3)
    }
}));

export default function BookList({ books }) {

    const classes = useStyles()

    return (
        <>
            <Typography variant="h4">
                My Books
            </Typography>
            
            {books.map((book) => (
                <div key={book._id}>

                <Card variant="outlined" className={classes.card}>

                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {book.title}
                        </Typography>

                        <Typography color="primary">
                            By {book.author}
                        </Typography> 

                    </CardContent>
                    
                    <CardActions>

                        <Link href="/[id]" as={`/${book._id}`} passHref>
                            <Button
                                size="small"
                                color="error"
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

