const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookSchema = new schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    category: {
        type : schema.Types.ObjectId,
        ref : 'category',
        required : true
    }
},{
    timestamps: true
})

const book = mongoose.model('book', bookSchema)

module.exports = book