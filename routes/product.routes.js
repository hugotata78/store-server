const { Router } = require('express')
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, addImageToProduct, removeImageFromProduct } = require('../controllers/product.controller')
const router = Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.post('/:id/:imageId',addImageToProduct)
router.delete('/:id/:imageId',removeImageFromProduct)

module.exports = router