const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController/index.js');


router.post('/login', authController.login );
router.post('/register', authController.register);
router.post('/logout' , authController.logout);

module.exports = router;