import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';

dbConnect();

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await handleGetRequest(req, res);
            break;
        case 'POST':
            await handlePostRequest(req, res);
            break;
        case 'DELETE':
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} is not allowed`);
            break;
    }
}

// TRY CATCH GOES HERE
async function handleGetRequest(req, res) {
    const { _id } = req.query
    const book = await Book.findOne({ _id})
    res.status(200).json(book)
}

async function handlePostRequest(req, res) {
    try {
        const {title, author, number_of_pages, isbn, date_published, genre, summary, mediaUrl } = req.body
        if (!title || !author || !number_of_pages || !isbn || !date_published || !genre || !summary || !mediaUrl) {
        return res.status(422).send("Book missing one or more fields")
        }
        const book = await new Book({
            title,
            author,
            number_of_pages,
            isbn,
            date_published,
            genre,
            summary,
            mediaUrl
        }).save()
        res.status(201).json(book)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error creating book")
    }
}

// TRY CATCH GOES HERE
async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    console.log("REQUEST", _id)
    await Book.findOneAndDelete({ _id })
    res.status(204).json({})
}