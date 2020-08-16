import Link from 'next/link';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';

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

            <Grid container spacing={2}>

                {books.map((book) => (
                    <Grid item component={Card} key={book._id}>

                        <CardContent>

                            <Typography color="primary" variant="h5">
                                {book.title}
                            </Typography>

                            <Typography color="secondary">
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

                    </Grid>
                ))}

            </Grid>
            
        </>
    )
}

