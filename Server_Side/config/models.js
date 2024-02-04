const mongoose = require('mongoose');


const { CustomerSchema , CustomerListingSchema , RBHSchema ,RBHListingSchema }= require('./schema');

//defining mongoose models

const Customer = mongoose.model("Customer" , CustomerSchema);

const CustomerListing = mongoose.model("CustomerListing" , CustomerListingSchema);

const RBH = mongoose.model("RBH" , RBHSchema);

const RBHListing = mongoose.model("RBHListing" , RBHListingSchema);



module.exports = {Customer , CustomerListing , RBH , RBHListing};