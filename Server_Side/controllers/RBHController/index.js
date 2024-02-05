// controllers/RBHController.js

const RBHController = {
  get: async (req, res) => {
    // Logic for handling login
    const getFn = require("./get.js");

    response = await getFn(req.params.id);
    statusCode = response.statusCode;
    delete response.statusCode;
    res.status(statusCode).send(response);
  },

  create: async (req, res) => {
    // Logic for handling user registration
    const createFn = require("./create.js");

    response = await createFn(req);
    statusCode = response.statusCode;
    delete response.statusCode;
    res.status(statusCode).send(response);
  },

  update: async (req, res) => {
    // Logic for handling logout
    const updateFn = require("./update.js");

    response = await updateFn(req.params.id , req);
    statusCode = response.statusCode;
    delete response.statusCode;
    res.status(statusCode).send(response);
  },

  delete: async (req, res) => {
    // Logic for handling logout
    const deleteFn = require("./delete.js");

    response = await deleteFn(req , req.params.id);
    statusCode = response.statusCode;
    delete response.statusCode;
    res.status(statusCode).send(response);
  },
};

module.exports = RBHController;
