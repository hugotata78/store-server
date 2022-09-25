const { Router } = require('express')
const { createRole, getRoles, getRole, updateRole, deleteRole, addUserRole, removeUserRole } = require('../controllers/role.controller')
const { Auth, isAdmin } = require('../middlewares')
const { roleValidator } = require('../validators')
const router = Router()

router.use(Auth)
router.use(isAdmin)
router.post('/', roleValidator, createRole)
router.get('/',  getRoles)
router.get('/:id',getRole)
router.put('/:id',updateRole)
router.delete('/:id',deleteRole)
router.post('/:id/:userId', addUserRole)
router.delete('/:id/:userId',removeUserRole)

module.exports = router