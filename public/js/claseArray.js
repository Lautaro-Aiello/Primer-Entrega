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

    modify = (req, res) => {
        const { id } = req.params
        const product = req.body
        product.id = id
        this.array.splice(parseInt(id - 1), 1, product)
        res.json({ modifiedProduct: product })
    }

    findById(id){
        let producto = this.array.find(num => num.id == id)
        return producto
    }

    delete = (req, res) => {
        const { id } = req.params
        const product = this.array.splice(parseInt(id - 1), 1)
        res.json({ deletedProduct: product })
    }

}

module.exports = Arrays;