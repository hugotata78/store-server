const {validationResult} = require('express-validator');

const validateResult= (req, res, next)=>{
try {
    validationResult(req).throw()
     next()
} catch (error) {
    res.status(500).json({
        errors: error.array()
    })
}
}

module.exports = {validateResult}