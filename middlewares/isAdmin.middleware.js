module.exports = {
    isAdmin(req,res,next){
        const isAdmin = req.user.roles.find(r=>r.id==1)
        if(!isAdmin) return res.status(401).json({msg:'Access denied!'})
        next()
    }
}