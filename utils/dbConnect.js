// This is a database connection function
import mongoose, { connection } from 'mongoose';

const connectionn = {} // creating connection object

async function dbConnect() {
    // check if we have a connection to our database
    if (connection.isConnected) {
        return
    }

    // connecting to our database
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    connection.isConnected = db.connections[0].readyState
}

export default dbConnect;