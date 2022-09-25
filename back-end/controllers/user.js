const User = require('../models/User')

const controller ={} //objeto vazio

/*
    Métodos de CRUD do controller

    create: cria um novo usuário
    retrieve: retorna todos os usuários cadastrados
    retrieveAll: retorna todos os usuários cadastrados
    retrieveOne: retorna um único usuário
    update: atualiza os dados de um usuário
    dele: exclui um usuário
*/

controller.create = async(req, res)=>{
    try{
        await User.create(req.body)
        //HTTP 201: Created 
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveAll = async(req, res)=>{
    try{
        // find() sem parâmetros, retorna todos os documentos da coleção
        const result = await User.find()
        // HTTP 200: OK (implicito)
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async(req, res)=>{
    try{
        const result = await User.findById(req.params.id)
        // HTTP 200: OK (implicito)
        if (result){
            res.send(result) // encontrou o documento
        } else {
            // HTTP 404: Not Found
            res.status(404).end()
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

controller.update = async(req, res)=>{
    try{
        const result = await User.findByIdAndUpdate(req.params.id, req.body)
        // HTTP 200: OK (implicito)
        if (result) return res.status(204).end()
        // HTTP 404: Not Found
        res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

controller.delete = async(req, res)=>{
    try{
        const result = await User.findByIdAndDelete(req.params.id)
        // HTTP 200: OK (implicito)
        if (result) return res.status(204).end()
        // HTTP 404: Not Found
        res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = controller