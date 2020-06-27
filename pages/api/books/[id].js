import dbConnect from '../../../utils/dbConnect';
import Book from '../../../models';

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const book = await Book.findById(id)
                if (!pet) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: book })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT':
            try {
                const book = await Book.findByAndUpdate(id, req.body), {
                    new: true,
                    runValidators: true,
                })
                if (!book) {
                    return res.status(400).json()
                }
            }
    }
}