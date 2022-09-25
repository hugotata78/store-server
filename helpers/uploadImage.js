const fs = require('fs')
const { Buffer } = require('buffer')

const uploadImage = (req,res) => {
    let image
    console.log(req.body)
    if (req.file || req.body.image ) {
        console.log(req.file)
        if(req.file){
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1])
            image = Buffer.from(req.file.path + '.' + req.file.mimetype.split('/')[1])
            return image
        }else {
            return image = req.body.image
        }
    }
    else {
       return null
    }
}

module.exports = { uploadImage }