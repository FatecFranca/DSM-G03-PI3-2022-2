const Question = require('../models/Question')

const controller = {} //Objeto vazio

/*  
    Métodos de CRUD do controller

    create: cria um novo usuario	
    retrieveAll: retorna todos os usuarios cadsatrados
    retrieceOne: retorna um  unico usuario especifico
    update: atualiza um usuario
    delete: remove um usuario

*/

controller.create = async (req, res) => {
    try {
        await Question.create(req.body)
        //HTTP 201: Created
        res.status(201).end()

    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}
controller.retrieveAll = async (req, res) => {
    try{
        //find() sem parametros retorna todos os documentos 
        //da coleção
        const result = await Question.find()
        //HTTP 200: OK (implicito)
        res.send(result)

    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async (req, res) => {
    try {
        const result = await Question.findById(req.params.id)
        
        //HTTP 200: OK (implicito)
        if (result) res.send(result) //Encontrou o documento
        //HTTP 404: Not Found
        else res.status(404).end() //Não encontrou o documento
    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async (req, res) => {
    try {
        const result = await Question.findByIdAndUpdate(req.params.id, req.body)
        
        //HTTP 204: No content
        if (result) return res.status(204).end() //Encontrou e atualizou
        //HTTP 404: Not Found
        else res.status(404).end() //Não encontrou

    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async (req, res) => {
    try {
        const result = await Question.findByIdAndDelete(req.params.id)
        
        //HTTP 204: No content
        if (result) return res.status(204).end() //Encontrou e Deleteu
        //HTTP 404: Not Found
        else res.status(404).end() //Não encontrou

    }
    catch (error) {
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller