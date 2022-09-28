const { check } = require('express-validator')
const { validateResult } = require('./erros')
const { Category } = require('../models')

const categoryValidator = [
    check('name')
        .custom(async (value) => {
            if(!value){
                throw new Error('The name field is required!');
            }else{
                if(value.length < 3){
                    throw new Error('Name must contain at least three letters!');
                }else{
                    const category = await Category.findOne({
                        where: {
                            name: value
                        }
                    })
                    if (category) throw new Error('The name entered is already in use!');
                }
            }
        }),
    check('description')
        .not()
        .isEmpty()
        .withMessage('The description field is required!'),
    (req,res,next)=>{
        validateResult(req, res, next)
    }
    
]

module.exports = {
    categoryValidator
}