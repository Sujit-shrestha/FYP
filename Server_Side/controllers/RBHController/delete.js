const path = require("path");
const {ObjectId} = require('mongodb');
const { RBH } = require(path.join(__dirname, "../../config/models.js"));
const { connectToDatabase, disconnectFromDatabase } = require(path.join(
  __dirname,
  "../../config/dbOperation.js"
));

async function deletes(req ,id = null){
  try{
    await connectToDatabase();
  if(id == null ) {
    throw new Error("Id is required in parameter!!");
  }
    let RBHexists = await RBH.findById(id);
    if(!RBHexists){
      throw new Error("Data not found to delete!!");
    }
    const result = await RBH.deleteOne({_id : new ObjectId(id) });
    console.log(result);
    if(result.deletedCount === 0){
      throw new Error("Cannot delete from database!!");
    }
    await disconnectFromDatabase();
    return  {
      status: true,
      statusCode: 200,
      message: "Data deleted successfully",
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

module.exports = deletes;

