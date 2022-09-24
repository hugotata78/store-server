module.exports = {
    checkPermissions(req,res,next){
        const { id } = req.params
        const isAdmin = req.user.roles.find(r=>r.id == 1)
        if(req.user.id == id || isAdmin){
            console.log(req.user.roles)
            next()

        }else{
            res.status(401).json({msg:'Access denied!'})
        }
    }
}