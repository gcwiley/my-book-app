import { useState } from 'react';
import { useRouter } from 'next/router';

// Material UI Components
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const BookForm = ({ bookForm }) => {

    const router = useRouter()

    const contentType = 'application/json'

    const [ errors, setErrors ] = useState({})
    const [ message, setMessage ] = useState('')

    const [ form, setForm ] = useState({
        title: bookForm.title,
        author: bookForm.author,
        number_of_pages: bookForm.number_of_pages,
        isbn: bookForm.isbn,
        year_published: bookForm.year_published,
        genre: bookForm.genre,
        summary: bookForm.summary,
    })

    // The PUT method edits an existing entry in the mongodb database
    
    const putData = async (form) => {

        const { id } = router.query

        try {
            const res = await fetch(`/api/books/${id}`, {
               method: 'PUT', 
               headers: {
                Accept: contentType,
                'Content-Type': contentType,
            },
            body: JSON.stringify(form),
            })
            const { data } = await res.json()

            mutate(`/api/books/${id}`, data, false) // Update the local data without a revalidation
            router.push('/')
        }   catch (error) {
            setMessage('Failed to update book')
        }
    }

    // The POST method adds a new entry in the mongodb database
    const postData = async (form) => {

        try {
            await fetch('/api/pets', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })
            router.push('/')
        } catch (error) {
            setMessage('Failed to add book')
        }
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.name === 'poddy_trained' ? target.checked : target.value
        const name = target.name

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
            forNewBook ? postData(form) : putData(form)
        } else {
            setErrors ({ errs })
        }
    }

    // Makes sure book info is filled for book title, author, etc
    const formValidate = () => {
        let err = {}
        if (!form.title) err.title = 'Title is required'
        if (!form.author) err.author = 'A author is required'
        // ADD More to this.
        return err
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Grid item>
                    <TextField
                        type="text"
                        label="Title"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        type="text"
                        label="Author"
                        variant="outlined"
                    />
                </Grid>

                <Grid item>
                    <TextField
                        type="text"
                        label="ISBN"
                        variant="outlined"
                    />
                </Grid>

                <Grid item>
                    <TextField
                        type="date"
                        variant="outlined"
                    />
                </Grid>

                <button type="submit">
                    Submit
                </button>

                <p>{message}</p>

            </form>
        </>
    )
}

export default BookForm;

