const { check } = require('express-validator')
const { validateResult } = require('./erros')
const { Role } = require('../models')

const roleValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('The name field is required!')
        .isLength({ min: 3 })
        .withMessage('Name must contain at least three letters!')
        .custom(async (value) => {
            const role = await Role.findOne({
                where: {
                    name: value
                }
            })
            if (role) throw new Error('The name entered is already in use!');
        }),
    check('description')
        .not()
        .isEmpty()
        .withMessage('The description field is required!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = {
    roleValidator
}