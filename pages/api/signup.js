import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

dbConnect();

export default async (req, res) => {
    try {
        // 1) Validate name / email / password
        if (!isLength(name, { min: 3, max: 10 })) {
            return res.status(422).send("Name must be 3-10 characters long")
        } else if (!isLength(password, { min: 6 })) {
            return res.status(422).send("Password must be at least 6 characters long")
        } else if (!isEmail(email)) {
            return res.status(422).send("Email must be valid")
        }
        // 2) Check to see if the user already exists in the db
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with email ${email}`)
        }
        // 3) if not, hash their password
        const hash = await bcrypt.hash(password, 10)
        // 4) create user
        const newUser = await new User({
            name,
            email,
            password: hash
        }).save()
        console.log({newUser})
        // 5) create token for the new user
        const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, { expiresIn: '7d' })
        // 6) send back the token
        res.status(201).json(token)
    } catch (error) {
        console.error(error)
        res.status(500).send("Error signin up user. Please try again later.")
    }
}