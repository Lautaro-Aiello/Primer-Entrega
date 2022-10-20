const express = require ("express")
const app = express()
const routerProductos = require("./routes/productos")
const routerCarritos = require("./routes/carritos")

app.use(express.static("./public"))

app.use("/api/productos", routerProductos)
app.use("/api/carritos", routerCarritos)


app.get('*', (req, res) => {
    res.json("Error: Ruta o metodo no implementado");
}
);

app.post('*', (req, res) => {
    res.json("Error: Ruta o metodo no implementado");
}
);

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))