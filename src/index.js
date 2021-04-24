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

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // sign method takes two arguments - first is object (data that is embedded in token), second is string
   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'})
   console.log(token)

   // "verify" takes two arguments - first is token you want to verify and sencond is the secret to use 
   const data = jwt.verify(token, 'thisismynewcourse')
   console.log(data)
}

myFunction()