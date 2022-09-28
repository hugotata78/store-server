const { User, Role, Product } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    async createUser(req, res) {
        try {
            const { username, email, password } = req.body

            const user = await User.create({
                username,
                email,
                password: bcrypt.hashSync(password, 10)
            })

            const role = await Role.findOne({
                where: {
                    id: 2
                }
            })
            role.addUser(user)
            const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRES_IN })
            res.status(201).json({ token })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) return res.status(401).json({ msg: 'Authentication Error' })
            const pass = bcrypt.compareSync(password, user.password)
            if (!pass) return res.status(401).json({ msg: 'Authentication Error' })
            const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRES_IN })
            res.status(201).json({ token })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getUsers(req, res) {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }
            })
            res.status(200).json({ users })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getUser(req, res) {
        try {
            const { id } = req.params
            const user = await User.findOne({
                where: {
                    id: id
                },
                attributes: { exclude: ['password'] }
            })

            if (!user) return res.status(404).json({ msg: 'User not found!' })
            res.status(200).json({ user })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async findMe(req, res) {
        try {
            const { id } = req.params
            const user = await User.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Product,
                    as: 'products',
                },
            })
            if (!user) return res.status(404).json({ msg: 'User not found',response:user })
            res.status(200).json({ user })
        } catch (error) {

        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params
            const response = await User.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!response[0]) return res.status(404).json({ msg: 'User not found!', response: response[0] })
            res.status(200).json({ msg: 'Data updated successfully', response: response[0] })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params
            const response = await User.destroy({
                where: {
                    id: id
                }
            })
            if (!response) return res.status(404).json({ msg: 'User not found!', response: response })
            res.status(200).json({ msg: 'Data deleted successfully', response: response })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async addProductToCart(req, res) {
        try {
            const { id, productId } = req.params
            const user = await User.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Product,
                    as: 'products'
                }
            })
            const product = await Product.findOne({
                where: {
                    id: productId
                }
            })
            if (!product) return res.status(404).json({ msg: 'Product not found!' })
            const findProductId = user.products.find(p => p.id == productId)
            if (findProductId) return res.status(400).json({ msg: `The Product with the id ${productId} already added to your cart` })
            user.addProduct(product)
            res.status(200).json({ msg: `The product with the id ${productId} was added to your cart` })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async removeProductFromCart(req, res) {
        try {
            const { id, productId } = req.params
            const user = await User.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Product,
                    as: 'products'
                }
            })
            const findProductId = user.products.find(p => p.id == productId)
            if (!findProductId) return res.status(400).json({ msg: 'The product you want to remove from the cart has not been found' })
            const products = user.products.filter(p => p.id != productId)
            user.setProducts(products)
            res.status(200).json({ msg: `The product with the id ${productId} has been removed from the cart` })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

}