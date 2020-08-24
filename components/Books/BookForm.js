import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
// import catchErrors from '../../utils/catchErrors';

import { Typography, TextField, Grid, Paper, Button, Backdrop, CircularProgress, Snackbar, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
}));

const INITIAL_BOOK = {
        title: "",
        author: "",
        number_of_pages: "",
        isbn: "",
        date_published: "",
        genre: "",
        summary: "",
        media: ""
    }

export default function BookForm() {

    const [ book, setBook ] = useState(INITIAL_BOOK);
    const [ mediaPreview, setMediaPreview ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);
    // const [ error, setError ] = useState(true);

    // useEffect goes here
    useEffect(() => {
        const isBook = Object.values(book).every(el => Boolean(el))
        isBook ? setDisabled(false) : setDisabled(true)
    }, [book])

    function handleChange(event) {
        const { name, value, files } = event.target;
        if (name === 'media') {
            setBook((prevState) => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]))
        } else {
          setBook((prevState) => ({ ...prevState, [name]: value }));  
        }
    }

    async function handleImageUpload() {
        const data = new FormData()
        data.append('file', book.media)
        data.append('upload_preset', 'my-book-library')
        data.append('cloud_name', 'dnc06uisc')
        const response = await axios.post(process.env.CLOUDINARY_URL, data)
        const mediaUrl = response.data.url
        return mediaUrl;
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            setLoading(true)
            const mediaUrl = await handleImageUpload()
            console.log({ mediaUrl })
            const url = `${baseUrl}/api/books`
            const { title, author, number_of_pages, isbn, date_published, genre, summary } = book;
            const payload = { title, author, number_of_pages, isbn, date_published, genre, summary, mediaUrl }
            const response = await axios.post(url, payload );
            console.log({response})
            setBook(INITIAL_BOOK)
            setSuccess(true)
        } catch (error) {
            console.error(error)
            // catchErrors(error)
        } finally {
            setLoading(false)
        }
    }

    const classes = useStyles();

    return (

        <>

        <Snackbar
            open={success}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            autoHideDuration={5000}
        >   
            <Alert
                severity="success"
                elevation={2}
            >
                This Book has been added to your library.
            </Alert>
        </Snackbar>

        <Paper variant="outlined" className={classes.paper}>

            <Typography variant="h4" gutterBottom>
                New Book
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
                            helperText="Select Book Cover"
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={disabled}
                        >
                            Submit
                        </Button>

                        <Backdrop
                            className={classes.backdrop}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </Grid>
                    
                </Grid>
            </form>
        </Paper>

        </>
    )
}
