const { Router } = require('express')
const { createImage, getImages, getImage, updateImage, deleteImage } = require('../controllers/image.controller')
const { Auth, isAdmin } = require('../middlewares')
const multer = require('multer')
const { imageValidator } = require('../validators')
const upload = multer({ dest: 'public/image'})
const router = Router()

router.use(Auth)
router.use(isAdmin)
router.post('/', upload.single('image'), imageValidator, createImage)
router.get('/',getImages)
router.get('/:id', getImage)
router.put('/:id', updateImage)
router.delete('/:id', deleteImage)

module.exports = router