const { Router } = require('express')
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory, addProductToCategory, removeProductFromCategory } = require('../controllers/category.controller')
const { Auth, isAdmin } = require('../middlewares')
const router = Router()

router.post('/', Auth, isAdmin, createCategory)
router.get('/', getCategories)
router.get('/:id', getCategory)
router.put('/:id', Auth, isAdmin, updateCategory)
router.delete('/:id', Auth, isAdmin, deleteCategory)
router.post('/:id/:productId', Auth, isAdmin, addProductToCategory)
router.delete('/:id/:productId', Auth, isAdmin, removeProductFromCategory)

module.exports = router