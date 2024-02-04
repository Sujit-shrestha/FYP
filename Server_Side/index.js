const express = require('express');
const router = require('./routes/router.js');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/' , router);



// app.get('/user' , (req,res) => {
//   console.log("inside router");

//   res.status(200).json({
//     "status":true ,
//     "message" : "User accessed!f"
//   });
// });

app.listen(PORT , () => {  
  console.log(`Server listening in port ${PORT}`);
});
