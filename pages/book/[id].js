import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

// book details
export default function Book({ book }) {
    return (
        <article>
            <h1>Book Details Page</h1>
            <p>{book.title}</p>
            <p>{book.author}</p>
        </article>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get books
    const url = `${baseUrl}/api/books/books`
    const response = await axios.get(url);

    const books = response.data

    const paths = books.map((book) => ({
        params: { _id: book._id },
    }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should be 404
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const url = `${baseUrl}/api/books/books/${params._id}`
    const res = await axios.get(url)
    const book = await res.json()

    return { props: { book }}
}
