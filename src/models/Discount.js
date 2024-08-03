const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
    validate: {
      validator: function (value) {
        // Ensure rate is less than 1 if provided
        return value <= 1;
      },
      message: (props) =>
        `${props.value} is not a valid discount rate. It should be less than 1.`,
    },
  },
  couponCode: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Discount", DiscountSchema);
