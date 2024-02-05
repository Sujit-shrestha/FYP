const express = require('express');
const router = express.Router();
const RBHController = require('../controllers/RBHController/index.js');


router.get('/:id?', RBHController.get );
router.post('/', RBHController.create);
router.put('/:id?' , RBHController.update);
router.delete('/:id?' , RBHController.delete);


module.exports = router;