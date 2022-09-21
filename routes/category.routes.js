const { Router } = require('express')
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addProductToCategory, removeProductFromCategory } = require('../controllers/category.controller')
const router = Router()

router.post('/', createCategory)
router.get('/', getCategories)
router.get('/:id', getCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)
router.post('/:id/:productId',addProductToCategory)
router.delete('/:id/:productId',removeProductFromCategory)

module.exports = router