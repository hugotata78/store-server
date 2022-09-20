const { Router } = require('express')
const roleRoutes = require('./role.routes')
const router = Router()

router.use('/roles',roleRoutes)

module.exports = router