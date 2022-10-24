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

    async createCarrito(req, res, productos){
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const dataObj = JSON.parse(data)
        let prod = productos
        let id = dataObj[dataObj.length - 1] + 1;
        let timestamp = Date.now()
        let carro = {
            id: id,
            timestamp: timestamp,
            productos: prod
        }
        
        dataObj.push(carro)
        if(dataObj.length == 0){
            id = 1;
            carro.id = id
        }else{
            carro.id = dataObj.length;
        }
        await fs.promises.writeFile(this.archivo, JSON.stringify(dataObj,null,2))
        console.log(carro)
        res.json(carro)
        return carro
    }


    async getCarritoById(req,res) {
        const {id} = req.params
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const allCarritos = JSON.parse(data)
        const carrito = allCarritos.filter(c => c.id == id);
        if (carrito.length === 0) {
            return null;
        }
        return carrito[0];
    }

    async deleteCarrito (req, res)  {
        let {id} = req.params
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        const allCarritos = JSON.parse(data)
        const nuevaLista = allCarritos.find((carro) => carro.id != id)
        console.log(nuevaLista)
        await fs.promises.writeFile(this.archivo, JSON.stringify(nuevaLista,null,2));
        return nuevaLista;
    }

    async productsCarrito (req, res) {
        const {id} = req.params
        const carrito = await this.getCarritoById(req,res)
        if(carrito){
            let prod = carrito.productos
            res.json({productos: prod})
            console.log({productos: prod})
            return ({productos: prod});
        }else{
            return null
        }    
    } 

    async addProductsCarrito (req, res)  {
        let {id} = req.params
        const read = await fs.promises.readFile(this.archivo, 'utf-8' );
        const carritos = JSON.parse(read);
        const carrito = carritos.find( prod => prod.id == id );
        const producto = req.body
        producto.id = (carrito.productos.length + 1) + 1
        producto.timestamp = Date.now()
        if(carrito == undefined){
            res.send({error: "Carrito no encontrado"})
        }else{
            carrito.productos.push(producto)
            await fs.promises.writeFile(this.archivo, JSON.stringify(carritos,null,2))
            res.json( carrito)
        }
        
    } 


    async deleteProductInCarrito (req,res)  {
        let {id} = req.params
        let {id_prod} = req.params
        
        const carritos = await this.get()
        //Buscar carrito por id
        const carrito = carritos.find( prod => prod.id == id );
        if ( carrito == undefined ){
            res.send({ error: 'Carrito no encontrado' });
        } else {
            //Buscar index del producto en el array
            const idx = carrito.productos.findIndex( p => p.id == id_prod );
            if( idx === -1 ){
            res.send({ error: 'Producto no encontrado' })
            } else {
            //Eliminar producto
            carrito.productos.splice( idx, 1 );
            await fs.promises.writeFile( this.archivo, JSON.stringify( carritos, null, 2) );
            res.send( `Se elimino el producto con id: ${ id_prod } del carrito ${ id }` );

            }

        }
    }

}

module.exports = Arrays;