const mongoose = require('mongoose')

const schema = mongoose.Schema({
    //Campo de chave estrangeira para a coleção Assessment
    assessment: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'Assessment', // Referencia a coleção Assessment
        required: true
    },
    question: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'Question', // Referencia a coleção Question
        required: true
    },

    answer: {
        type: String,
    },
    comment: {
        type: String,
    },
    answered_at: {
        type: Date,
        required: true,
        default: Date.now() //Data/hora atual
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
module.exports = mongoose.model('Answer', schema, 'answers')