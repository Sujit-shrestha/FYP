const path = require("path");
const { RBH } = require(path.join(__dirname, "../../config/models.js"));
const { connectToDatabase, disconnectFromDatabase } = require(path.join(
  __dirname,
  "../../config/dbOperation.js"
));

async function get(id = null) {
  try {
    await connectToDatabase();
    let RBHdata;
    //case where id is provided
    if (id != null) {
      RBHdata = await RBH.findById(id);
    } else {
      //else get whole data
      RBHdata = await RBH.find({});
    }
    if (!RBHdata) {
      throw new Error("Couldn't get data from database");
    }

    await disconnectFromDatabase();
    return {
      status: true,
      statusCode: 200,
      message: "Data extracted successfully",
      Data: RBHdata,
    };
  } catch (err) {
    return {
      status: false,
      statusCode: 404,
      message: err.message,
      data: [],
    };
  }
}

module.exports = get;
