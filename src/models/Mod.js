const mongoose = require("mongoose");

const modSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  modGroupIds: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Mod = mongoose.model("Mod", modSchema);

module.exports = Mod;
