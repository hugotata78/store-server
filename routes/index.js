const { Router } = require('express')
const swaggerUi = require('swagger-ui-express');
const swagger = require('../docs/swagger')
const authRoutes = require('./auth.routes')
const cartRoutes = require('./cart.routes')
const categoryRoutes = require('./category.routes')
const imageRoutes = require('./image.routes')
const productRoutes = require('./product.routes')
const roleRoutes = require('./role.routes')
const userRoutes = require('./user.routes')
const router = Router()

router.use('/auth', authRoutes)
router.use('/cart', cartRoutes)
router.use('/categories', categoryRoutes)
router.use('/images',imageRoutes)
router.use('/products', productRoutes)
router.use('/roles', roleRoutes)
router.use('/users', userRoutes)
router.use('/docs',swaggerUi.serve,swaggerUi.setup(swagger))

module.exports = router