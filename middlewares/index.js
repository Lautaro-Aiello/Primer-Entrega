
const authMiddleware = (req, res , next) => {
    if(req.headers.rol == "admin"){
        next()
    }else{
        res.send("Error, no es administrador")
    }
}

module.exports = { authMiddleware }