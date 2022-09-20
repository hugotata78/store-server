const { Router } = require('express')
const { createRole, getRoles, getRole, updateRole, deleteRole, addUserRole, removeUserRole } = require('../controllers/role.controller')
const router = Router()

router.post('/', createRole)
router.get('/', getRoles)
router.get('/:id',getRole)
router.put('/:id',updateRole)
router.delete('/:id',deleteRole)
router.post('/:id/:userId', addUserRole)
router.delete('/:id/:userId',removeUserRole)

module.exports = router