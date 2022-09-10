const express = require('express')
const bookService = require('../services/book')

const router = express.Router()

router.post('/', async (req, res) => {
    const book = req.body
    const result = await bookService.createBook(book)
    res.json(result)
})

module.exports = router