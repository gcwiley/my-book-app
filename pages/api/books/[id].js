import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';

await dbConnect();

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

async function handleGetRequest(req, res) {}

async function handlePostRequest(req, res) {
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
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    await Book.findByIdAndDelete({ _id })
    res.status(204).json({})
}