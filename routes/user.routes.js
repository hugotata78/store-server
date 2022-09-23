const { Router } = require('express')
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { Auth, isAdmin } = require('../middlewares')
const router = Router()

router.use(Auth)
router.use(isAdmin)
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router 