const { Image } = require('../models')

module.exports = {
    async createImage(req, res) {
        try {
            const { image, description, product_id } = req.body
            const img = await Image.create({
                image,
                description,
                product_id
            })
            res.status(201).json({ img })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getImages(req, res) {
        try {
            const images = await Image.findAll()
            res.status(200).json({ images })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getImage(req, res) {
        try {
            const { id } = req.params
            const image = await Image.findOne({
                where: {
                    id: id
                },
            })
            if (!image) return res.status(404).json({ msg: 'Image not found!' })
            res.status(200).json({ image })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async updateImage(req, res) {
        try {
            const { id } = req.params
            const response = await Image.update(req.body,{
                where: {
                    id: id
                }
            })
            console.log(response)
            if (!response[0]) return res.status(404).json({ msg: 'Image not found!', response: response[0] })
            res.status(200).json({ msg: 'Data updated successfully!', response: response[0] })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async deleteImage(req, res) {
        try {
            const { id } = req.params
            const response = await Image.destroy({
                where: {
                    id: id
                }
            })
            if (!response) return res.status(404).json({ msg: 'Image not found!', response: response })
            res.status(200).json({ msg: 'Data updated successfully!', response: response })
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}