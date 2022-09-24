const { Router } = require('express')
const { createUser, login, findMe } = require('../controllers/user.controller')
const { Auth, isOwner } = require('../middlewares')
const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/:id', Auth, isOwner, findMe)

module.exports = router 