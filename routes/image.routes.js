const { Router } = require('express')
const { createImage, getImages, getImage, updateImage, deleteImage } = require('../controllers/image.controller')
const { Auth } = require('../middlewares')
const router = Router()

router.use(Auth)
router.post('/', createImage)
router.get('/',getImages)
router.get('/:id', getImage)
router.put('/:id', updateImage)
router.delete('/:id', deleteImage)

module.exports = router