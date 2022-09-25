const { check } = require('express-validator')
const { validateResult } = require('./erros')
const { Role } = require('../models')

const imageValidator = [
    check()
    .not()
    .isEmpty()
    .withMessage('The name field is required!'),
    check('description')
        .not()
        .isEmpty()
        .withMessage('The description field is required!'),
    (req,res,next)=>{
        validateResult(req, res, next)
    }
    
]

module.exports = {
    imageValidator
}