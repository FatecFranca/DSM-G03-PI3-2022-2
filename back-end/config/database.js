const mongoose = require('mongoose')

// Usa destruturaração para obter as variavies 
// de ambiente necessarias para fazer a conexão
// com o banco de dados
const {
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE,
} = process.env

module.exports = function() {
    mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE},retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })

    mongoose.connection.on('connected', () => {
        console.log('** Mongoose conectado com o servidor remoto **   ')
    })
    mongoose.connection.on('error', (err) => {
        console.error('** Mongoose: Erro de conexão. Causa: ' + erro)
    })
}