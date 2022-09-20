const {Router} = require('express')
const { addProductToCart, removeProductFromCart } = require('../controllers/user.controller')
const router = Router()

router.post('/:id/:productId',addProductToCart)
router.delete('/:id/:productId',removeProductFromCart)

module.exports = router