const express = require ("express");
const { Router } = express;
const routerCarritos = Router();
const Arrays = require("../public/js/claseArray")

routerCarritos.use(express.json());
routerCarritos.use(express.urlencoded({extended:true }));


// let Carrito = require("../carritos")
// let carritos = [];
// Carrito = carritos


const arrayCarrito = new Arrays()

routerCarritos.post("/", (req, res) => {
    arrayCarrito.addCarrito(req, res)
    console.log(req.body)
})

routerCarritos.delete("/:id", (req, res) => {
    res.send()
})

routerCarritos.get("/:id/productos", (req, res) => {
    res.send()
})

routerCarritos.post("/:id/productos", (req, res) => {
    res.send()
})

routerCarritos.delete("/:id/productos/:id_prod", (req, res) => {
    res.send()
})

module.exports = routerCarritos;