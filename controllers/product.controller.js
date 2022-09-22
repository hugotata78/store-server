const { Image, Product } = require('../models')

module.exports = {
    async createProduct(req, res) {
        try {
            const { brand, price, description } = req.body
            const product = await Product.create({
                brand,
                price,
                description
            })
            res.status(201).json({ product })

        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getProducts(req, res) {
        try {
            const products = await Product.findAll({
                attributes: ['brand', 'price', 'description']
            })
            res.status(200).json({ products })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getProduct(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Image,
                    as: 'images',
                    attributes: ['image']
                },
                attributes: ['brand', 'price', 'description']
            })
            if (!product) return res.status(404).json({ msg: 'Product not found!' })
            res.status(200).json({ product })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async updateProduct(req, res) {
        try {
            const { id } = req.params

            const response = await Product.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!response[0]) res.status(404).json({ msg: 'Product not found!', response: response[0] })
            res.status(200).json({ msg: 'Data updated successfully', response: response[0] })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async deleteProduct(req, res) {
        try {
            const { id } = req.params
            const response = await Product.destroy({
                where: {
                    id: id
                }
            })
            if (!response) res.status(404).json({ msg: 'Product not found!', response: response })
            res.status(200).json({ msg: 'Data deleted successfully', response: response })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async addImageToProduct(req, res) {
        try {
            const { id, imageId } = req.params
            const product = await Product.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Image,
                    as: 'images',
                },
                
            })
            if (!product) return res.status(404).json({ msg: 'Product not found!' })
            const image = await Image.findOne({
                where: {
                    id: imageId
                }
            })
            
            if (!image) return res.status(404).json({ msg: 'Image not found' })
            const findImageId = product.images.find(i => i.id == imageId)
            if (findImageId) return res.status(400).json({ msg: `The image with the id ${imageId} is already added to the product` })
            await image.update({
                product_id:id
            })
            res.status(200).json({ msg: `The image with the id ${imageId} was added to the product` })

        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async removeImageFromProduct(req, res) {
        try {
            const { id, imageId } = req.params
            const product = await Product.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Image,
                    as: 'images',
                },
                
            })
            if (!product) return res.status(404).json({ msg: 'Product not found!' })
            const image = await Image.findOne({
                where: {
                    id: imageId
                }
            })
            if (!image) return res.status(404).json({ msg: 'Image not found' })
            const findImageId = product.images.find(i => i.id == imageId)
            if (!findImageId) return res.status(400).json({ msg: `The product does not have the image with the id ${imageId}` })
            await image.update({
                product_id:null
            })
            res.status(200).json({ msg: `The image with the id ${imageId} has been removed` })

        } catch (error) {
            res.status(500).json({ error })
        }
    }
}