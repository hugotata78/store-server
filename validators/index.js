const { userValidator, loginValidator } = require('./user.validators')
const { categoryValidator } = require('./category.validators')
const { imageValidator } = require('./image.validators')
const { roleValidator } = require('./role.validators')
const { productValidator } = require('./product.validators')

module.exports = {
    userValidator,
    loginValidator,
    categoryValidator,
    imageValidator,
    roleValidator,
    productValidator
}