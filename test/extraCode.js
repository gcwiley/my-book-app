import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models/Book';

// switch statement within exported function

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res)
            break;
        case "DELETE":
            await handleDeleteRequest(req, res)
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}


async function handlePostRequest(req, res) {

    const { name, price, description, mediaUrl } = req.body
    
    try {
        if (!name || !price || !description || !mediaUrl ) {
            return res.status(422).send("Book Form is missing one or more fields")
        }


    } catch(error) {
        console.error(error)
        res.status(500).send("Server error in creating product")
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    await Book.findByIdAndDelete({ _id })
    res.status(204).json({})
}