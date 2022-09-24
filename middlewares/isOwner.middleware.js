module.exports = {
    isOwner(req,res,next){
        const { id } = req.params 
        console.log(id)
        if(req.user.id != id ) return res.status(401).json({msg:'Access denied!'})
        next()
    }
}