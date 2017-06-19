const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/:id', controller.findById);

router.post('/', controller.create);

router.put('/:id', controller.update);

module.exports = router;
