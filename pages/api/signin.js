import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dbConnect()

export default async (req, res) => {
    const { email, password } = req.body
    try {
        // 1) check to see if a user exists with the provided email
        const user = await User.findOne({ email }).select('+password')
        // 2) --if not, return error
        if (!user) {
            return res.status(404).send("No user exists with that email")
        }
        // 3) check to see if user's password matches the one in db
    } catch (error) {
        
    }
}