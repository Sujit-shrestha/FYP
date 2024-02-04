const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoute');

router.use((req,res,next) =>{
  console.log(req.method , 'Time' , Date.now());
  next();
});

router.use('/auth' , authRoute);
router.use('/user' , userRoute);




module.exports = router;