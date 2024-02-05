const mongoose = require("mongoose");

require("dotenv").config();
const dbName = process.env.DATABASE_NAME;
const connectionString = process.env.DB_CONNECTION_STRING;
const conn = `${connectionString}/${dbName}`;
// const {Customer, CustomerListing , RBH , RBHListing} = require('./models');
async function connectToDatabase() {
  try {
    await mongoose.connect(conn);
  } catch (err) {
    console.log("Connection error: " ,err);
  }
}
async function disconnectFromDatabase(){
  try{
    await mongoose.disconnect();
  }catch(err){
    console.log("Disconnection error: " ,err)
  }
}
module.exports = {connectToDatabase , disconnectFromDatabase};
