// Material UI Components
import { Typography, } from '@material-ui/core';

export default function BookDetails({ book }) {

    return (
        <>
            <Typography variant="h2">
                {book.title}
            </Typography>

            <Typography variant="h5">
                {book.author}
            </Typography>

            <Typography variant="body2">
                Published: {book.year_published}
            </Typography>

            <Typography variant="body2">
                Page Count: {book.number_of_pages}
            </Typography>

            <Typography variant="body2">
                Summary: {book.summary}
            </Typography>
        </>
    )
}