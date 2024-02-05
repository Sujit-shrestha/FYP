// controllers/authController.js

const authController = {
  login: (req, res) => {
    // Logic for handling login
    res.json({
      "message": "Login route"
    });
  },

  register: (req, res) => {
    // Logic for handling user registration
    res.json({
      "message": "Register route"
    });
  },

  logout: (req, res) => {
    // Logic for handling logout
    res.json({
      "message": "Logout route"
    });
  },
};

module.exports = authController;
