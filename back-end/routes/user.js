const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)
router.post('/login', controller.login)

module.exports = router