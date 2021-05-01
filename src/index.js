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