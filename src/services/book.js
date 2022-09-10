const books = require('../model/book')

const createBook = async (_book) => {
    try{
        const book = await books.create(_book)
        return book
    }catch(e){
        console.log(e.message);
    }
}


module.exports = {
    createBook
}