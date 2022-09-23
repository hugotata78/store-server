const { Auth } = require('./auth.middleware')
const { isAdmin } = require('./isAdmin.middleware')

module.exports = {
    Auth,
    isAdmin
}