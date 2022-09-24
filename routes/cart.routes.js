const { Router } = require('express')
const { addProductToCart, removeProductFromCart } = require('../controllers/user.controller')
const { Auth, isOwner } = require('../middlewares')
const router = Router()

router.use(Auth)
router.post('/:id/:productId', isOwner, addProductToCart)
router.delete('/:id/:productId', isOwner, removeProductFromCart)

module.exports = router