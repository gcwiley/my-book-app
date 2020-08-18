import React, { useState } from 'react';
import { Typography, TextField, Grid, Paper, Button, makeStyles } from '@material-ui/core';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    }
}))

const INITIAL_BOOK = {
        title: "",
        author: "",
        number_of_pages: "",
        isbn: "",
        date_published: "",
        genre: "",
        summary: "",
        book_cover_image: ""
    }

export default function BookForm() {

    const [ book, setBook ] = useState(INITIAL_BOOK);
    const [ mediaPreview, setMediaPreview ] = useState('')



    function handleChange(event) {
        const { name, value, files } = event.target;
        if (name === 'media') {
            setBook(prevState => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]))
        } else {
          setBook((prevState) => ({ ...prevState, [name]: value }));  
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(book)
        setBook(INITIAL_BOOK)
    }

    const classes = useStyles();

    return (

        <Paper className={classes.paper}>

            <Typography variant="h4" gutterBottom>
                Add a new Book
            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            size="small"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            name="title"
                            value={book.title}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Author"
                            variant="outlined"
                            size="small"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Number of Pages"
                            variant="outlined"
                            size="small"
                            type="number"
                            name="number_of_pages"
                            value={book.number_of_pages}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="ISBN"
                            variant="outlined"
                            size="small"
                            type="number"
                            helperText="Must be a 9 digit number"
                            name="isbn"
                            value={book.isbn}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            size="small"
                            type="date"
                            name="date_published"
                            helperText="Date Published"
                            value={book.date_published}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label="Genre"
                            variant="outlined"
                            size="small"
                            type="text"
                            autoComplete="off"
                            name="genre"
                            value={book.genre}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Summary"
                            variant="outlined"
                            size="medium"
                            type="text"
                            placeholder="Please write a short summary of this book."
                            multiline
                            rows={6}
                            fullWidth
                            name="summary"
                            value={book.summary}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <img src={mediaPreview} height="200px" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            size="medium"
                            type="file"

                            name="media"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                    
                </Grid>
            </form>
        </Paper>
    )
}
