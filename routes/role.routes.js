const { Router } = require('express')
const { createRole, getRoles, getRole, updateRole, deleteRole, addUserRole, removeUserRole } = require('../controllers/role.controller')
const { Auth } = require('../middlewares')
const router = Router()
router.use(Auth)
router.post('/', createRole)
router.get('/',  getRoles)
router.get('/:id',getRole)
router.put('/:id',updateRole)
router.delete('/:id',deleteRole)
router.post('/:id/:userId', addUserRole)
router.delete('/:id/:userId',removeUserRole)

module.exports = router