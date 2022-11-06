const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    max: 50,
    min: 5,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your name"],
    max: 50,
    min: 5,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = model("User", userSchema);
