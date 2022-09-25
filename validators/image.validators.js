const { check } = require('express-validator')
const { validateResult } = require('./erros')
const { Image } = require('../models')

const imageValidator = [
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