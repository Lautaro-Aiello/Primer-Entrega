const fs = require("fs")

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    }

    async save(data){
        let contenido = await fs.promises.readFile(this.archivo)
        let contenidoObj = JSON.parse(contenido)
        let newId;
        if(contenidoObj.length > 0){
            newId = contenidoObj.length + 1;
        }else{
            newId = 1
        }
        data.id = newId;
        data.timestamp = Date.now()
        contenidoObj.push(data)
        await fs.promises.writeFile(this.archivo, JSON.stringify(contenidoObj))
        console.log(`Objeto Añadido`)
    }

    async getById(num){
         let contenido = await fs.promises.readFile(this.archivo)
         let contenidoObj = JSON.parse(contenido)
         let resultado = contenidoObj.find(objeto => objeto.id === num)
         if(!resultado){
            console.log(null)
            return null
         }
         console.log(resultado)  
         return resultado 
    }

    async getAll(id){
        if(id){
            this.getById(id)
        }else{
            let contenido = await fs.promises.readFile(this.archivo)
            let contenidoObj = JSON.parse(contenido)
            // console.log(contenidoObj)
            return contenidoObj;
        }
        
    }

    async modify(id, producto){
        producto.id = id
        resultado = this.getAll(id).splice(id-1,1,producto)
        await fs.promises.appendFile(this.archivo, JSON.stringify(this.getById(id)))
        return this.getById(id)
    }

   async deleteById(num){
        let contenido = await fs.promises.readFile(this.archivo)
        let contenidoObj = JSON.parse(contenido)
        let buscar = contenidoObj.filter(objeto => objeto.id !== num)
        await fs.promises.writeFile(this.archivo, JSON.stringify(buscar))
        let eliminado = contenidoObj.find(objeto => objeto.id === num)
        console.log(eliminado) 
    }

    async deleteAll(){
        await fs.promises.writeFile(this.archivo, "[]")
        console.log("Objetos eliminados")
    }
}

module.exports = Contenedor; 