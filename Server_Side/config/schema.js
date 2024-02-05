const mongoose = require('mongoose');

//defininig mongoose schema
const CustomerSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  phoneNumber: {
    type: String,
    validate: {
      validator: function (value) {
        // Regular expression to match Nepali phone numbers
        const nepaliPhoneNumberRegex = /^[0-9]{10}$/;
        return nepaliPhoneNumberRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid Nepali phone number!`,
    },
  },
  email: String,
  age: { type: Number, min: 18, max: 90 },
  createdAt: { type: Date, default: Date.now },
});

const CustomerListingSchema = new mongoose.Schema({
  title: String,
  description: String,
  minPrice: Number,
  maxPrice : Number,
  imageLink: String,
  visible: Boolean,
});


const RBHSchema = new mongoose.Schema({
  username: String,
  password: String,
  businessName: String,
  location: String,
  ownerName: String,
  visible: Boolean,
});

const RBHListingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  visible: Boolean,
});

module.exports = {CustomerSchema, CustomerListingSchema, RBHSchema, RBHListingSchema};
