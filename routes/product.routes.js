const { Router } = require('express')
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, addImageToProduct, removeImageFromProduct } = require('../controllers/product.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.post('/', Auth, createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', Auth, updateProduct)
router.delete('/:id', Auth, deleteProduct)
router.post('/:id/:imageId', Auth, addImageToProduct)
router.delete('/:id/:imageId', Auth, removeImageFromProduct)

module.exports = router