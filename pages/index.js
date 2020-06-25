import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Link from 'next/link';

// fetches data from database
export async function getStaticProps() {
    const url = `${baseUrl}/api/books/books`;
    const response = await axios.get(url);
    return {
        props: {
            books: response.data
        }
    }
}

export default function Home({ books }) {
    return (

        <React.Fragment>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <Link href="/book/[_id]" as={`/book/${book._id}`}>
                            <a>{book.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}