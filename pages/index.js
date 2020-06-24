import axios from 'axios';
import baseUrl from '../utils/baseUrl';

// fetches data from database
export async function getStaticProps() {
    const url = `${baseUrl}/api/books`;
    const response = await axios.get(url);
    return {
        props: {
            books: response.data
        }
    }
}

export default function Home() {
    return <div>Welcome to Next.js!</div>
}