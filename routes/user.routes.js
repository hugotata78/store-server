const { Router } = require('express')
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const { Auth, isAdmin, isOwner, checkPermissions } = require('../middlewares')
const router = Router()

router.use(Auth)
router.get('/', isAdmin, getUsers)
router.get('/:id', isAdmin, getUser)
router.put('/:id', isOwner, updateUser)
router.delete('/:id', checkPermissions, deleteUser)

module.exports = router 