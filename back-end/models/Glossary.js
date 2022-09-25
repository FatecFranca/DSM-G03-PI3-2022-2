const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    entry: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        
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
module.exports = mongoose.model('Glossary', schema, 'glossarys')