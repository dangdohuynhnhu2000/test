const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
    trim: true,
  },
  imageLink: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

module.exports = Item;
