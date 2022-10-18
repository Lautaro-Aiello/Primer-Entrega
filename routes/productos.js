const express = require ("express")
const { Router } = express
const { authMiddleware } = require("../middlewares/index")
const Contenedor = require("../public/js/Contenedor")
const Arrays = require("../public/js/claseArray")
const routerProductos = Router()


routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}));

const productos = []
const arrayProducto = new Arrays(productos)
const contenedorProductos = new Contenedor("productos.txt")


routerProductos.get("/:id?", (req, res) => {
    let resultado = arrayProducto.get(req.params.id)
    res.json(resultado)
})

routerProductos.post("/", authMiddleware , (req, res) => {
    let agregado = arrayProducto.add(req.body)
    console.log(req.body)
    res.json(agregado)
})

routerProductos.put("/:id", authMiddleware , (req, res) => {
    arrayProducto.modify(req,res)
})

routerProductos.delete("/:id", authMiddleware , (req, res) => {
    arrayProducto.delete(req,res)
})

module.exports = routerProductos;