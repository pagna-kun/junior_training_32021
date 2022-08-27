const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost/training'

const connectDB = async () => {
    await mongoose.connect(dbURL, {
        autoIndex : true,
        serverSelectionTimeoutMS: 30000
    })
    console.log("connected successful");
}

module.exports = connectDB