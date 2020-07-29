import Book from '../../../models/Book';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

// swith statement with exported function

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

async function handleGetRequest(req, res) {

}

async function handlePostRequest(req, res) {

    const { name, price, description, mediaUrl } = req.body
    try {

    } catch(error) {
        
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    await Book.findByIdAndDelete({ _id })
    res.status(204).json({})
}