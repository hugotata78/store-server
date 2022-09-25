const { Router } = require('express')
const { createUser, login, findMe } = require('../controllers/user.controller')
const { Auth, isOwner } = require('../middlewares')
const { userValidator, loginValidator } = require('../validators')
const router = Router()

router.post('/register', userValidator, createUser)
router.post('/login', loginValidator, login)
router.get('/:id', Auth, isOwner, findMe)

module.exports = router 