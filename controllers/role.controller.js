const { Role, User } = require('../models')

module.exports = {
    async createRole(req, res) {
        try {
            const { name, description } = req.body 
            const role = await Role.create({
                name,
                description
            })
            res.status(201).json({ role })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getRoles(req,res){
        try {
            const roles = await Role.findAll()
            res.status(200).json({ roles })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async getRole(req,res){
        try {
            const { id } = req.params 
            const role = await Role.findOne({
                where:{
                    id:id
                }
            })
            if(!role) return res.status(404).json({ msg:'Role not found!', data:role})
            res.status(200).json({ role })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async updateRole(req,res){
        try {
            const { id } = req.params 
            const response = await Role.update(req.body,{
                where:{
                    id:id
                }
            })
            if(!response[0]) return res.status(404).json({ msg:'Role not found!',response:response[0]})
            res.status(200).json({ msg:'Data updated successfully',response:response[0]})
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async deleteRole(req,res){
        try {
            const { id } = req.params 
            const response = await Role.destroy({
                where:{
                    id:id
                }
            })
            if(!response) return res.status(404).json({ msg:'Role not found!',response:response})
            res.status(200).json({ msg:'Data deleted successfully', response:response})
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async addUserRole(req,res){
        try {
            const { id, userId } = req.params
            const role = await Role.findOne({
                where: {
                    id: id
                },
                include: {
                    model: User,
                    as: 'users'
                }
            })
            if (!role) {
                res.status(404).json({ msg: 'Role not found!' })
            } else {
                const user = await User.findOne({
                    where: {
                        id: userId
                    }
                }
                )
                if (!user) {
                    return res.status(404).json({ msg: 'User not found!' })
                }
                const findUserId = role.users.find(u => u.id == userId)
                if (findUserId) {
                    return res.status(400).json({ msg: `The user with the id ${userId} already has the role ${role.name}` })
                }
                role.addUser(user)
                res.status(201).json({ msg: `The role with id was ${id} added to user user with id ${userId}` })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    async removeUserRole(req,res){
        try {
            const { id, userId } = req.params
            const role = await Role.findOne({
                where: {
                    id: id
                },
                include: {
                    model: User,
                    as: 'users'
                }
            })
            if (!role) {
                return res.status(404).json({ msg: 'Role not found!' })
            } else {
                const findUserId = role.users.find(u => u.id == userId)
                if (!findUserId) {
                    return res.status(400).json({ msg: `The user with the id ${userId} does not have the role you want to delete!` })
                }
                const users = role.users.filter(u => u.id != userId)
                role.setUsers(users)
                res.status(200).json({ msg: `The role was removed ${role.name} from the user with the id ${userId}` })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    }     
}