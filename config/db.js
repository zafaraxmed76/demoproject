const mongoose = require("mongoose")

const connectDB = async() => {

    try {

        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,

        })
    } catch (err) {
        console.log('MongoDB connect to: ${conn.connection.host}')
        console.log(err)
    }
}
module.exports = connectDB