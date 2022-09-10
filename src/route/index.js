const express = require('express')

const router = express.Router()

router.use('/user', require("../controller/user.controller"))
router.use('/category', require("../controller/category.controller"))
router.use('/book', require("../controller/book.controller"))

module.exports = router