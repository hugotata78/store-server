const { Router } = require('express')
const { createProduct, getProducts, getProduct, getProductsByBrand, updateProduct, deleteProduct, addImageToProduct, removeImageFromProduct, getProductsByPrice } = require('../controllers/product.controller')
const { Auth, isAdmin } = require('../middlewares')
const multer = require('multer')
const { productValidator } = require('../validators')
const upload = multer({ dest: 'public/image'})
const router = Router()

router.post('/', Auth, isAdmin, upload.single('image'), productValidator, createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', Auth, isAdmin, updateProduct)
router.delete('/:id', Auth, isAdmin, deleteProduct)
router.post('/:id/:imageId', Auth, isAdmin, addImageToProduct)
router.delete('/:id/:imageId', Auth, isAdmin, removeImageFromProduct)
router.get('/search/brand',getProductsByBrand)
router.get('/search/price',getProductsByPrice)

module.exports = router