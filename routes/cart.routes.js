const { Router } = require('express')
const { addProductToCart, removeProductFromCart } = require('../controllers/user.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.post('/:id/:productId', Auth, addProductToCart)
router.delete('/:id/:productId', Auth, removeProductFromCart)

module.exports = router