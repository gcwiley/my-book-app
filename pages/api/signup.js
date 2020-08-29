import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect()

export default async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // 1) Check to see if the user already exists in the db.
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with email ${email}`)
        }
        // 2) if not, hash thier password

        // 3) create user
        // 4) create token for the new user
        // 5) send back the token
    } catch (error) {
        // add code here
    }
}