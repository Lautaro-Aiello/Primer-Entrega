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

    async createCarrito(req, res){
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const dataObj = JSON.parse(data)
        let prod = req.body
        let newId;
        if(prod.length > 0){
            newId = prod.length + 1;
        }else{
            newId = 1
        }
        prod.id = newId;
        prod.timestamp = Date.now()
        let id = dataObj[dataObj.length - 1] + 1;
        let timestamp = Date.now()
        let carro = {
            id: id,
            timestamp: timestamp,
            productos: [prod]
        }
        dataObj.push(carro)
        if(dataObj.length == 0){
            id = 1;
            carro.id = id
        }else{
            carro.id = dataObj.length;
        }
        await fs.promises.writeFile(this.archivo, JSON.stringify(dataObj))
        console.log(carro)
        res.json(carro)
        return carro
    }


    async  getCarritoById(req,res) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const allCarritos = JSON.parse(data)
        const {id} = req.params
        const carrito = allCarritos.filter(c => c.id == id);
        if (carrito.length === 0) {
            return null;
        }
        res.json(carrito[0])
        return carrito[0];
    }

    async deleteCarrito (req, res)  {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const allCarritos = JSON.parse(data)
        let {id} = req.params
        const cart = await this.getCarritoById(id)
        const carritos = allCarritos.filter(carro => carro.id != id)
        if (allCarritos.length !== carritos.length) {
            await fs.promises.writeFile(this.archivo, JSON.stringify(carritos, null, 2));
        }
        res.json(cart)
        return cart;
        
        
    }

    async productsCarrito (req, res)  {

    } 

    async addProductsCarrito (req, res)  {

    } 

     async deleteProductInCarrito (req,res)  {

    }

    

}

module.exports = Arrays;