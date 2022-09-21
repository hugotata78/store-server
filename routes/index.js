const { Router } = require('express')
const authRoutes = require('./auth.routes')
const cartRoutes = require('./cart.routes')
const categoryRoutes = require('./category.routes')
const roleRoutes = require('./role.routes')
const userRoutes = require('./user.routes')
const router = Router()

router.use('/auth', authRoutes)
router.use('/cart', cartRoutes)
router.use('/categories', categoryRoutes)
router.use('/roles', roleRoutes)
router.use('/users', userRoutes)

module.exports = router