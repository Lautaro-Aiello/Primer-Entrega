const express = require ("express");
const { Router } = express;
const routerCarritos = Router();
const Arrays = require("../public/js/claseArray")

routerCarritos.use(express.json());
routerCarritos.use(express.urlencoded({extended:true }));


// let Carrito = require("../carritos")
// let carritos = [];
// Carrito = carritos


const carrito = new Arrays("carritos.txt")

routerCarritos.post("/", async (req, res) => {
    await carrito.createCarrito(req,res)
})

routerCarritos.delete("/:id", async (req, res) => {
    await carrito.deleteCarrito(req,res)
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