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
                    attributes:['image']
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
    }
}