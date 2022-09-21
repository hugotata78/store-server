const { Router } = require('express')
const { getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller')
const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router 