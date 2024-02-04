const express = require('express');
const router = express.Router();
const RBHController = require('../controllers/RBHController/index.js');


router.get('/', RBHController.get );
router.post('/', RBHController.create);
router.put('/' , RBHController.update);
router.delete('/' , RBHController.delete);


module.exports = router;