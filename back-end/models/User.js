const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // Índice único para não permitir repetição
        // de emails no cadastro
        index: { unique: true }
    },
    password_hash: {
        type: String,
        required: true,
        // Este campo não pode aparecer em consultas
        select: false
    },
    is_admin: {
        type: Boolean,
        required: true,
        // Por padrão, novos usuários NÃO SÃO admin
        default: false
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now() // Data/hora atual
    }
})

/*
    Parâmetros de mongoose.model:
    1º: o nome do model, para uso interno. Por convenção,
        usa-se Inicial Maiúscula.
    2º: a relação de campos do esquema (variável schema)
    3º: o nome da collection no banco de dados (normalmente,
        é o mesmo nome do model, mas pluralizado e com
        inicial minúscula)
*/
module.exports = mongoose.model('User', schema, 'users')