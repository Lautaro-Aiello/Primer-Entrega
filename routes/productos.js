const express = require ("express")
const { Router } = express
const { authMiddleware } = require("../middlewares/index")
const Arrays = require("../public/js/claseArray")
const routerProductos = Router()


routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}));

// let producto = require("productos.txt")
// let productos = []
// Producto = productos

const arrayProducto = new Arrays("productos.txt")

routerProductos.get("/:id?", async (req, res) => {
    let resultado = (await arrayProducto.get(req.params.id))
    res.json(resultado)
})

routerProductos.post("/", authMiddleware , async (req, res) => {
    let agregado = (await arrayProducto.add(req.body))
    console.log(req.body)
    res.json(agregado)
})

routerProductos.put("/:id", authMiddleware , async (req, res) => {
    await arrayProducto.modify(req,res)
})

routerProductos.delete("/:id", authMiddleware , async (req, res) => {
    const {id} = req.params
    res.json(await arrayProducto.delete(id))
})

module.exports = routerProductos;