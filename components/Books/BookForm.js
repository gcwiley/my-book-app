import React, { useState } from 'react';
import axios from 'axios';

// Material UI
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// CSS Styles
const useStyles = makeStyles((theme) => ({

}))

const initialBookForm = {
    title: "",
    author: "",
    number_of_pages: "",
    isdb: "",
    year_published: "",
    genre: "",
    summary: ""
}

export default function BookForm() {

    const classes = useStyles()

    const [form, setForm ] = useState(initialBookForm)

    // Changes State
    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const { title, author, isbn, number_of_pages } = form;

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: "POST",
            url: '/books',
            data: { title, author, isbn, number_of_pages }
        })
        .then(response => {
            console.log('Successfully added book', response)
            setForm(initialFormState)
        })
        .catch(error => {
            console.log('ERROR', error.response.data)
        })
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Add a New Book
                </Typography>

                <form
                    className={classes.form}
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
                                value={form.title}
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
                                value={form.title}
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
                                value={form.title}
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
                                value={form.title}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="year_published"
                                name="year_published"
                                variant="outlined"
                                required
                                fullWidth
                                id="year_published"
                                label="Year Published"
                                autoFocus
                                value={form.title}
                                onChange={handleChange}
                            />
                        </Grid>

                    </Grid>

                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>

            </div>
        </Container>
    );
}
