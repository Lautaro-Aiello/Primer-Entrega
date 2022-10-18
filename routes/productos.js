const express = require ("express")
const { Router } = express
const { authMiddleware } = require("../middlewares/index")
const Contenedor = require("../public/js/Contenedor")
const Arrays = require("../public/js/claseArray")
const routerProductos = Router()

routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}));

let productos = []
const arrayProducto = new Arrays(productos)
const contenedorProductos = new Contenedor("productos.txt")


routerProductos.get("/:id?", (req, res) => {
    let resultado = arrayProducto.get(req.params.id)
    res.json(resultado)
})

routerProductos.post("/", authMiddleware , (req, res) => {
    let agregado = arrayProducto.add(req.body)
    res.json(agregado)
})

routerProductos.put("/:id", authMiddleware , (req, res) => {
    let { id } = req.params.id
    let { producto } = req.body
    res.json(arrayProducto.modify(id, producto))
})

routerProductos.delete("/:id", authMiddleware , (req, res) => {
    res.json(arrayProducto.delete(req.params.id))
})

module.exports = routerProductos;