const fs = require("fs")

class Arrays{
    constructor(archivo){
        this.archivo = archivo
    }

    
    async get(id){
        const archivo = await fs.promises.readFile(this.archivo, "utf-8")
        const response = JSON.parse(archivo)
        if(id){
            return this.findById(id)
        }else{
            return response
        }
    }

    async add (data){
        const archivo = await fs.promises.readFile(this.archivo, "utf-8")
        const response = JSON.parse(archivo)
        let newId;
        if(response.length > 0){
            newId = response.length + 1;
        }else{
            newId = 1
        }
        data.id = newId;
        data.timestamp = Date.now()
        response.push(data)
        await fs.promises.writeFile(this.archivo, JSON.stringify(response))
        return data
    }

    addCarrito = (req, res) => {
        let element = req.body
        element.id = this.array.length + 1
        element.timestamp = Date.now()
        element.productos = [productos]
        this.array.push(element)
        res.json(element)
    }

    pushCarrito = (req, res) => {

    }
    
    async modify  (req, res) {
        const { id } = req.params
        const product = req.body
        product.id = id
        const originalProduct = await this.findById(id)
        const allProducts = await this.get()
        const filter = allProducts.filter(i => i.id !== originalProduct.id)
        filter.push(product)
        console.log(filter)
        await fs.promises.writeFile(this.archivo, JSON.stringify(filter))
        res.json({modifyProduct: product})
        return this.findById(product)
    }
    
    async findById(id){
        let contenido = await fs.promises.readFile(this.archivo)
        let contenidoObj = JSON.parse(contenido)
        let resultado = contenidoObj.find(objeto => objeto.id == id)
        if(!resultado){
           return null
        } 
        return resultado 
    }

    
    async delete(num){
        let contenido = await fs.promises.readFile(this.archivo, "utf-8")
        let contenidoObj = JSON.parse(contenido)
        let buscar = contenidoObj.filter(objeto => objeto.id !== num)
        await fs.promises.writeFile(this.archivo, JSON.stringify(buscar))
        let eliminado = contenidoObj.find(objeto => objeto.id === num) 
        return (eliminado)
    }

}

module.exports = Arrays;