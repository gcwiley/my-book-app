import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import Book from '../models/Book';

// Material UI Components
import Typography from '@material-ui/core/Typography';

export default function Home({ books }) {
    return (
        <>
           {/* Create a Card for each Book */}
           {books.map((book) => (
               <div key={book._id}>

                    <Typography variant="h5" component="h2">
                        {book.title}
                    </Typography>
                    <Typography color="primary">
                        {book.author}
                    </Typography>
                    <div>
                        <Link href="/[id]" as={`/${book._id}`}>
                            <button>View</button>
                        </Link>
                    </div>
                    
               </div>
           ))}
        </>
    )
}

// Retrieves book(s) data from mongodb database 
export async function getServerSideProps() {
    await dbConnect()

    // Find all the data in our database
    const result = await Book.find({})
    const books = result.map((doc) => {
        const book = doc.toObject()
        book._id = book._id.toString()
        return book
    })

    return { props: { books: books }}
}