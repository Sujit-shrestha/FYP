const path = require("path");
const { RBH } = require(path.join(__dirname, "../../config/models.js"));
const { connectToDatabase, disconnectFromDatabase } = require(path.join(
  __dirname,
  "../../config/dbOperation.js"
));

async function create(req){
  try{
    await connectToDatabase();
    const {username , paswword} = req.body;
    const existingUser = await RBH.findOne({username});
    if(existingUser){
      throw new Error("Username already exists!!");
    }
    const RBHdata = req.body;
    const newRBH = new RBH(RBHdata);
    await newRBH.save();

    await disconnectFromDatabase();
    return  {
      status: true,
      statusCode: 200,
      message: "Data created successfully",
      data : req.body
    };
  }catch(err){
    return{
      "status" : false ,
      "statusCode" : 404,
      "message" : err.message ,
      "data" : []
    };
  }
}

module.exports = create;

