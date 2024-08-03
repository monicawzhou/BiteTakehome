const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  id: String,
  name: String,
  itemIds: [String],
  magicCopyKey: String,
  imageUrl: String,
});

module.exports = mongoose.model("Section", sectionSchema);
