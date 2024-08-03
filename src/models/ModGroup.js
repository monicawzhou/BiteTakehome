const mongoose = require("mongoose");

const modGroupSchema = new mongoose.Schema({
  id: String,
  name: String,
  modIds: [String],
  maxMods: {
    type: Number,
    required: false,
  },
  minMods: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("ModGroup", modGroupSchema);
