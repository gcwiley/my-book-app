import Link from 'next/link';

import { Grid, Typography, Card, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    book_card: {
        width: theme.spacing(20),
        height: theme.spacing(30),
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(3)
    },
    book_card_image: {
        width: theme.spacing(20),
        height: theme.spacing(30),
        position: 'center'
    }
}));

export default function BookList({ books }) {

    const classes = useStyles()

    return (
        <>
            <Typography variant="h4">
                My Books
            </Typography>

            <Grid container spacing={0} >

                {books.map((book) => (
                    <Grid item component={Card} className={classes.book_card} elevation={4} key={book._id} >
                        <Link href="/[id]" as={`/${book._id}`} passHref>
                            <img src={book.mediaUrl} className={classes.book_card_image} />
                        </Link>
                    </Grid>
                ))}

            </Grid>
        </>
    );
}

