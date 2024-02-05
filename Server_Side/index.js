const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/' , router);


app.listen(PORT , () => {  
  console.log(`Server listening in port ${PORT}`);
});
