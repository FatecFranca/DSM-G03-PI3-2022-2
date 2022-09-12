const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

// Toras CRUD de User
router.post('/', controller.create);
router.get('/', controller.retrieveAll);
router.get('/:id', controller.retrieveOne);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);   

module.exports = router;