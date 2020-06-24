import axios from 'axios';
import baseUrl from '../utils/baseUrl';

import Link from 'next/link';

// fetches data from database
export async function getStaticProps() {
    const url = `${baseUrl}/api/book/books`;
    const response = await axios.get(url);
    return {
        props: {
            books: response.data
        }
    }
}

export default function Home({ books }) {
    return (
        <ul>
            {books.map(book => (
                <li key={id}>
                    <Link href="/book/[id]" as={`/book/${book.id}`}>
                        <a>{book.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}