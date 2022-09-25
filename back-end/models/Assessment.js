const mongoose = require('mongoose')

const schema = mongoose.Schema({
    //Campo de chave estrangeira para a coleção User
    user: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'User', // Referencia a coleção User
        required: true
    },

    name: {
        type: String,
        required: true,
        
    },
    object: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now() //Data/hora atual
    },
    finished_at: {
        type: Date,
        
    },
})

/*
         Parametro de mongooser.model:
    1º - Nome do model, para uso interno. Por convenção,
         usa-se Inicial Maiuscula.
    2º - A relaçãod de campos do esquema (variavel schema)
    3º - Nome da colelection no banco de dados (normalmente, é o mesmo nome do model, 
         mas   pluralizado e com inicial minuscula)
*/
module.exports = mongoose.model('Assessment', schema, 'assessmets')