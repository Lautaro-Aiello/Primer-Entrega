const fs = require("fs")

class Arrays{
    constructor(array){
        this.array = array
    }


    get(id){
        if(id){
            this.findById(id)
        }else{
            return this.array
        }
    }

    add(data){
        data.id = this.array.length+1;
        data.timestamp = Date.now()
        this.array.push(data)
        return data
    }

    modify(id, producto){
        producto.id = id
        return this.array.splice(parseInt(id-1),1,producto)
    }

    findById(id){
        let producto = this.array.find(num => num.id === id)
        return producto
    }

    delete(id){
        let nuevaLista = this.array.filter(elem => elem.id != id)
        this.array.push(nuevaLista)
        console.log(`Elemento borrado ${this.findById(id)}`)
        return nuevaLista
    }

}

module.exports = Arrays;