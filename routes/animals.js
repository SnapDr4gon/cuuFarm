const express = require('express');
const router = express.Router();
const controller = require('../controllers/animals');

//post
router.post('/', controller.create);

//get
router.get('/', controller.list);

//get
router.get('/:id', controller.index);

//put
router.put('/:id', controller.replace);

//patch
router.patch('/:id', controller.update);

//delete
router.delete('/:id', controller.destroy);

module.exports = router;