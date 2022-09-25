const { Category, Product } = require('../models')

module.exports = {
    async createCategory(req, res) {
        try {
            const { name, description } = req.body
            const category = await Category.create({
                name,
                description
            })
            res.status(201).json({ category })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getCategories(req, res) {
        try {
            const categories = await Category.findAll()
            res.status(200).json({ categories })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getCategory(req, res) {
        try {
            const { id } = req.params

            const category = await Category.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Product,
                    as: 'products',
                },
            })
            if (!category) return res.status(404).json({ msg: 'Category not found!' })
            res.status(200).json({ category })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async updateCategory(req, res) {
        try {
            const { id } = req.params
            const response = await Category.update(req.body, {
                where: {
                    id: id
                }
            })
            if (!response[0]) return res.status(404).json({ msg: 'Category not found!', response: response[0] })
            res.status(200).json({ msg: 'Data updated successfully', response: response[0] })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async deleteCategory(req, res) {
        try {
            const { id } = req.params
            const response = await Category.destroy({
                where: {
                    id: id
                }
            })
            if (!response) return res.status(404).json({ msg: 'Category not found!', response: response })
            res.status(200).json({ msg: 'Data deleted successfully', response: response })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async addProductToCategory(req,res){
        try {
            const { id, productId} = req.params
            const category = await Category.findOne({
                where:{
                    id:id
                },
                include:{
                    model:Product,
                    as:'products'
                }
            })
            if(!category) return res.status(404).json({msg:'Category not found!'})
            const product = await Product.findOne({
                where:{
                    id:productId 
                }
            })
            if(!product) return res.status(404).json({msg:'Product not found!'})
            const findProductId = category.products.find(p=>p.id == productId)
            if(findProductId) return res.status(400).json({msg:`The product with the id ${productId} is added to the category ${category.name}!`})
            category.addProduct(product)
            res.status(200).json({msg:`The product with the id ${productId} was added to the category ${category.name}`})
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async removeProductFromCategory(req,res){
        try {
            const { id, productId} = req.params
            const category = await Category.findOne({
                where:{
                    id:id
                },
                include:{
                    model:Product,
                    as:'products'
                }
            })
            if(!category) return res.status(404).json({msg:'Category not found!'})
            const findProductId = category.products.find(p=>p.id == productId)
            if(!findProductId) return res.status(400).json({msg:`The product you want to remove from the category ${category.name} has not been found!`})
            const products = category.products.filter(p=>p.id != productId)
            category.setProducts(products)
            res.status(200).json({msg:`The product has been removed from the category ${category.name}`})
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}