const { userValidator, loginValidator } = require('./user.validators')
const { categoryValidator } = require('./category.validators')

module.exports = {
    userValidator,
    loginValidator,
    categoryValidator
}