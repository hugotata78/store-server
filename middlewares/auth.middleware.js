const { Role, User } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    async Auth(req, res, next) {
        try {

            const strToken = req.headers.authorization
            if (!strToken) return res.status(403).json({ msg: 'You must login!' })
            const token = strToken.split(' ').length == 2 ? strToken.split(' ')[1] : strToken
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
            const user = await User.findOne({
                where: {
                    id: decoded.id
                },
                include: {
                    model: Role,
                    as: 'roles'
                }
            })
            if (!user) return res.status(401).json({ msg: 'Access denied!' })
            req.user = user
            next()
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}