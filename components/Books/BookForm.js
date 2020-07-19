import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2)
    }
}));

// Initial Book Form State
const initialBookForm = {
    title: "",
    author: "",
    number_of_pages: "",
    isbn: "",
    year_published: "",
    genre: "",
    summary: ""
}

export default function BookForm() {

    const classes = useStyles()

    // Manage State Here
    const [ book, setBook ] = useState(initialBookForm);
    const [ mediaPreview, setMediaPreview ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ disabled, setDisabled ] = useState(true);
    const [ error, setError ] = useState('');

    // useEffect goes here
    useEffect(() => {
        const isBook = Object.values(book)
    }, [])

    // Changes State
    function handleChange(event) {
        const { name, value, files } = event.target
        if (name === 'media') {
            setBook(prevState => ({ ...prevState, media: files[0] }))
            setMediaPreview(window.URL.createObjectURL(files[0]))
        } else {
            setBook((prevState) => ({ ...prevState, [name]: value }))
        }
    }

    // Uploads cover image to cloudinary
    async function handleImageUpload() {
        const data = new FormData()
        data.append('file', book.media)
        data.append('upload_preset', 'reactreserve')
        data.append('cloud_name', 'dnc06uisc')
        const response = await axios.post(process.env.CLOUDINARY_URL, data) // takes two arguments
        const mediaUrl = response.data.url
        return mediaUrl
    }
    
    // submits book data to database
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const url = `${baseUrl}/api/books`
            const payload = { title, author, number_of_pages, isbn, year_published, genre, summary }
            const response = await axios.post(url, payload);
            console.error({ response })
            setBook(initialBookForm); // resets book form
            setSuccess(true)
        } catch(error) {
            catchErrors(errors, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
            <>
                <Typography variant="h4" component="h1" gutterBottom >
                    Add a New Book
                </Typography>

                <form
                    noValidate
                    onSubmit={handleSubmit}
                >

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="title"
                                name="title"
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                autoFocus
                                value={book.title}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="author"
                                name="author"
                                variant="outlined"
                                required
                                fullWidth
                                id="author"
                                label="Author"
                                autoFocus
                                value={book.author}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="isbn"
                                name="isbn"
                                variant="outlined"
                                required
                                fullWidth
                                id="isbn"
                                label="ISBN"
                                autoFocus
                                helperText="Must be a 10 digit number"
                                value={book.isbn}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="number_of_pages"
                                name="number_of_pages"
                                variant="outlined"
                                required
                                fullWidth
                                id="number_of_pages"
                                label="Number of Pages"
                                autoFocus
                                value={book.number_of_pages}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="year_published"
                                type="date"
                                name="year_published"
                                variant="outlined"
                                required
                                fullWidth
                                id="year_published"
                                // label="Year Published"
                                autoFocus
                                value={book.year_published}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="genre"
                                name="genre"
                                select
                                variant="outlined"
                                required
                                fullWidth
                                id="genre"
                                label="Genre"
                                autoFocus
                                value={book.genre}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={12}>
                            <TextField
                                autoComplete="summary"
                                name="summary"
                                variant="outlined"
                                required
                                fullWidth
                                id="summary"
                                label="Book Summary"
                                multiline
                                rows={5}
                                autoFocus
                                value={book.summary}
                                onChange={handleChange}
                            />
                        </Grid>

                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </form>

            </>
    );
}
