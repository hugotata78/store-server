const { Router } = require('express')
const { createUser, login } = require('../controllers/user.controller')
const router = Router()

router.post('/register', createUser)
router.post('/login', login)

module.exports = router 