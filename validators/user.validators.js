const { check } = require('express-validator')
const { validateResult } = require('./erros')
const { User } = require('../models')

const userValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('The username field is required!')
        .isLength({ min: 3 })
        .withMessage('Username must contain at least 3 letters'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Please enter a valid email!')
        .custom(async (value) => {
            const user = await User.findOne({
                where: {
                    email: value
                }
            })
            if (user) throw new Error('The email entered is already in use!');
        }),
    check('password')
        .not()
        .isEmpty()
        .withMessage('The password field is required!')
        .isLength({ min: 3 })
        .withMessage('The password must contain at least 3 characters'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

const loginValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Please enter a valid email!'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('The password field is required!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    userValidator,
    loginValidator
}