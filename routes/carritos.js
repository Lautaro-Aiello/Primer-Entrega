const express = require ("express");
const { Router } = express;
const routerCarritos = Router();
const Arrays = require("../public/js/claseArray")

routerCarritos.use(express.json());
routerCarritos.use(express.urlencoded({extended:true }));


// let Carrito = require("../carritos")
// let carritos = [];
// Carrito = carritos

const productos = new Arrays("productos.txt")
const carrito = new Arrays("carritos.txt")

routerCarritos.post("/", async (req, res) => {
    let prod = await productos.get(req.params.id)
    await carrito.createCarrito(req,res, prod)
})

routerCarritos.delete("/:id", async (req, res) => {
    await carrito.deleteCarrito(req,res)
})

routerCarritos.get("/:id/productos", async (req, res) => {
    await carrito.productsCarrito(req,res)
})

routerCarritos.post("/:id/productos", async (req, res) => {
    await carrito.addProductsCarrito(req,res)
})

routerCarritos.delete("/:id/productos/:id_prod", async (req, res) => {
    await carrito.deleteProductInCarrito(req,res)
})

module.exports = routerCarritos;