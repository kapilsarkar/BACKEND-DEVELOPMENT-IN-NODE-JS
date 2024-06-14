const mongoose = require("mongoose");

//Define the Menu Schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: 0,
  },
  num_sales: {
    type: Number,
    dafault: 0,
  },
});

//Create a menu model:
const menuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = menuItem;

// {
//     "name": "Chow Min",
//     "price": 9.99,
//     "taste": "spicy",
//     "is_drink": true,
//     "ingredients": [ 'chow', 'paneer', 'potato' ],
//     "num_sales": 10,
// }