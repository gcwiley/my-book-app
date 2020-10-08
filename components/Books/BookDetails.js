import { Typography, Paper, Grid, Card,makeStyles } from '@material-ui/core';

import BookActions from './BookActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(3),
    },
    book_cover: {
        width: theme.spacing(30),
        height: theme.spacing(40),
        padding: theme.spacing(3)
    },
}));

export default function BookDetails({ book }) {

    const classes = useStyles();

    return (

        <Paper variant="outlined" className={classes.paper}>

            <Grid container spacing={0}>

                <Grid item xs={8}>

                    <Typography variant="h1" variant="h4">
                        {book.title}
                    </Typography>

                    <Typography variant="button" color="primary" gutterBottom>
                        By {book.author}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Published:</strong> {book.date_published}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Genre</strong> {book.genre}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Page Count:</strong> {book.number_of_pages}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Summary</strong>
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        {book.summary}
                    </Typography>

                </Grid>

                <Grid item xs={4}>
                    <img src={book.mediaUrl} className={classes.book_cover} alt={book.title} />
                </Grid>

            </Grid>

            {/* PASS IN PROPS */}
            <BookActions book={book}/>

        </Paper>
    )
}