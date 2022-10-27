const express = require('express')
const router = express.Router()
const controller = require('../controllers/criterion')

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.patch('/:id', controller.update) // PUT -> Atualiza o documento inteiro / PATCH -> Atualiza apenas os campos especificados
router.delete('/:id', controller.delete)

module.exports = router