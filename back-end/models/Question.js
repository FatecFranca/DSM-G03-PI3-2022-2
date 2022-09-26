const mongoose = require('mongoose')

const schema = mongoose.Schema({
    //Campo de chave estrangeira para a coleção Criterion
    criterion: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'Criterion', // Referencia a coleção Criterion
        required: true
    },
    glosary_refs: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'Glossary', // Referencia a coleção Glossary
        required: true
    },

    order: {
        type: Number,
    },
    enunciation: {
        type: String,
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
module.exports = mongoose.model('Question', schema, 'questions')