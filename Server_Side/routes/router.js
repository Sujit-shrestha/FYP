const express = require('express');
const router = express.Router();
const formattedDate=  require('../logs/logfile');

const RBHRoute = require('./RBHRoute');
const authRoute = require('./authRoute');
const customerRoute = require('./customerRoute');
const RBHListingRoute = require('./RBHListingtRoute');
const customerListingRoute = require('./customerListingRoute');

router.use((req,res,next) =>{
  console.log(req.method , req.url ,formattedDate);
  next();
});

router.use('/auth' , authRoute);
router.use('/rbh' , RBHRoute);
// router.use('/listing' , RBHListingRoute);
// router.use('/customer' , customerRoute);
// router.use('/items', customerListingRoute);






module.exports = router;