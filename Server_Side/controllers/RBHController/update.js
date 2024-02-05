const path = require("path");
const { ObjectId } = require("mongodb");
const { RBH } = require(path.join(__dirname, "../../config/models.js"));
const { connectToDatabase, disconnectFromDatabase } = require(path.join(
  __dirname,
  "../../config/dbOperation.js"
));

async function update(id = null, req) {
  try {
    await connectToDatabase();
    if (id == null) {
      throw new Error("Id must be provided to update!!");
    }

    let result = await RBH.findByIdAndUpdate(id, req.body, { new: true });
    await disconnectFromDatabase();
    return {
      status: true,
      statusCode: 200,
      message: "Data updated successfully",
      data: result
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

module.exports = update;
