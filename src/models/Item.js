const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  modGroupIds: [String],
  magicCopyKey: String,
  imageUrl: String,
});

module.exports = mongoose.model("Item", itemSchema);
