const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //indice unico para nao permitir repetição de email no cadastro
        index: {unique: true}
    },
    password_hash: {
        type: String,
        required: true,
        //Este compo nao pode aparecer em consultas
        select: false
    },
    is_admin: {
        type: Boolean,
        required: true,
        //Por padrão, novos usuarios nao são admins
        default: false
    },
    created_at: {
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
module.exports = mongoose.model('User', schema, 'users')