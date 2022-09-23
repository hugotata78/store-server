const { Router } = require('express')
const { createUser, login, findMe } = require('../controllers/user.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/:id', Auth, findMe)

module.exports = router 