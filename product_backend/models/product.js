const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  shipping: {
    type: String,
    default: "USPS 3-5 days"
  },
  description: String,
  picture: String
},{ timestamps: true})

module.exports = mongoose.model('products',productSchema);