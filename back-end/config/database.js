const mongoose = require('mongoose')

// Usa desestruturação para obter as variáveis
// de ambiente necessárias para fazer a conexão
// ao banco de dados


module.exports = function () {
    mongoose.connect(`mongodb+srv://api_pet:123456jv@cluster0.v4fnoqw.mongodb.net/test`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () =>
        console.log('** Mongoose conectado ao servidor remoto **')
    )

    mongoose.connection.on('error', erro =>
        console.error('*** Mongoose: ERRO DE CONEXÃO. Causa: ' + erro)
    )
}