const { check } = require('express-validator')
const { validateResult } = require('./erros')

const productValidator = [
    check('brand')
        .not()
        .isEmpty()
        .withMessage('The brand field is required!')
        .isLength({ min: 3 })
        .withMessage('Brand must contain at least three letters'),
    check('price')
        .not()
        .isEmpty()
        .withMessage('The price field is required!')
        .isNumeric()
        .withMessage('The price field requires a numeric value'),
    check('description')
        .not()
        .isEmpty()
        .withMessage('The description field is required!'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    productValidator
}