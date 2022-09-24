const { Auth } = require('./auth.middleware')
const { isAdmin } = require('./isAdmin.middleware')
const { isOwner } = require('./isOwner.middleware')

module.exports = {
    Auth,
    isAdmin,
    isOwner
}