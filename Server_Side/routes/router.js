const express = require('express');
const router = express.Router();
const formattedDate=  require('../logs/logfile');

const RBHRoute = require('./RBHRoute');
const authRoute = require('./authRoute');
const customerRoute = require('./customerRoute');

router.use((req,res,next) =>{
  console.log(req.method , req.url ,formattedDate);
  next();
});

router.use('/auth' , authRoute);
router.use('/rbh' , RBHRoute);
router.use('/customer' , customerRoute);






module.exports = router;