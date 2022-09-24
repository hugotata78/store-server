const { Auth } = require('./auth.middleware')
const { isAdmin } = require('./isAdmin.middleware')
const { isOwner } = require('./isOwner.middleware')
const { checkPermissions } = require('./permissionsDeletUser.middleware')

module.exports = {
    Auth,
    isAdmin,
    isOwner,
    checkPermissions
}