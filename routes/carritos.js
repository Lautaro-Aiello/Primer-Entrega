const express = require ("express")
const { Router } = express
const routerCarritos = Router()

routerCarritos.get("/", (req, res) => {
    res.send("ok")
})

module.exports = routerCarritos;