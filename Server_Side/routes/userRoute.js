const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController/index.js');


router.get('/', userController.get );
router.post('/', userController.create);
router.put('/' , userController.update);
router.delete('/' , userController.delete);


module.exports = router;