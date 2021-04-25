const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        // get the value of the header provided by the user
        const token = req.header('Authorization').replace('Bearer ', '')
        // make sure the token is valid - created by server and has not expired
        const decoded = jwt.verify(token, 'thisismynewcourse')
        // find the user with the correct ID who has the auth token still stored in the database
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        // if there is not user 
        if (!user) {
            throw new Error()
        }

        req.token = token
        // give the route handler access to the user fetched from the database
        req.user = user
        // route handler runs b/c user has proven they are authenticated correctly
        next()

    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth