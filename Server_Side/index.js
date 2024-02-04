const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/user' , (req,res) => {
  res.status(200).json({
    "status":true ,
    "message" : "User accessed!f"
  });
});

app.listen(PORT , () => {
  console.log(`Server listening in port ${PORT}`);
});
