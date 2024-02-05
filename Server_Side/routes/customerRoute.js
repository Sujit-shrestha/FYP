const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController/index.js');


router.get('/', customerController.get );
router.post('/', customerController.create);
router.put('/' , customerController.update);
router.delete('/' , customerController.delete);


module.exports = router;