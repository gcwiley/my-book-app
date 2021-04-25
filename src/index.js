const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const bookRouter = require('./routers/book')

const app = express()

const port = process.env.PORT || 3000

// automatically parse incoming JSON to an object so we can access it in our request handlers
app.use(express.json())

// register the user Router
app.use(userRouter)
// register the book Router
app.use(bookRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})

// load in the Book Model
const Book = require('./models/book')
const User = require('./models/user')

const main = async () => {
    // find book by ID
    // const book = await Book.findById('60857a82e61d6e1387d7d74d')
    // await book.populate('owner').execPopulate()
    // console.log(book.owner)

    const user = await User.findById('60857929453acc128546ada7')
    await user.populate('books').execPopulate()
    console.log(user.books)
}

main()
