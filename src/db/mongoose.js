const mongoose = require('mongoose')

// Creates connection to Mongo DB

mongoose.connect('mongodb://127.0.0.1:27017/my-book-library', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})