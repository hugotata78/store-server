const { Router } = require('express')
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addProductToCategory, removeProductFromCategory } = require('../controllers/category.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.post('/', Auth, createCategory)
router.get('/', getCategories)
router.get('/:id', getCategory)
router.put('/:id', Auth, updateCategory)
router.delete('/:id', Auth, deleteCategory)
router.post('/:id/:productId', Auth,addProductToCategory)
router.delete('/:id/:productId', Auth, removeProductFromCategory)

module.exports = router