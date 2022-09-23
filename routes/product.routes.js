const { Router } = require('express')
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, addImageToProduct, removeImageFromProduct } = require('../controllers/product.controller')
const { Auth, isAdmin } = require('../middlewares')
const router = Router()

router.post('/', Auth, isAdmin, createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', Auth, isAdmin, updateProduct)
router.delete('/:id', Auth, isAdmin, deleteProduct)
router.post('/:id/:imageId', Auth, isAdmin, addImageToProduct)
router.delete('/:id/:imageId', Auth, isAdmin, removeImageFromProduct)

module.exports = router