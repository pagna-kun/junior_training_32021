const express = require('express')
const categoryService = require('../services/category')

const router = express.Router()

//create category
router.post('/', async (req, res) => {
    const category = req.body
    const result = await categoryService.createCategory(category)
    res.json(result)
})

router.get('/', async (req, res) => {
    const result = await categoryService.getAllCategory()
    res.json(result)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await categoryService.getCategoryById(id)
    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const result = await categoryService.deleteCategory(id)
    res.json(result)
})

module.exports = router