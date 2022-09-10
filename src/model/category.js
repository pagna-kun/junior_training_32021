const mongoose = require("mongoose")
const schema = mongoose.Schema

const categorySchema = new schema({
    category : {
        type: String,
        unique: true
    },
    description : String
})

const category = mongoose.model('category', categorySchema)

module.exports = category