const { Router } = require('express')
const { addProductToCart, removeProductFromCart } = require('../controllers/user.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.use(Auth)
router.post('/:id/:productId', addProductToCart)
router.delete('/:id/:productId', removeProductFromCart)

module.exports = router