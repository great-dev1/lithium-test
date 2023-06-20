const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide a Firstname!"],
    unique: false,
  },

  lastname: {
    type: String,
    required: [true, "Please provide a Lastname!"],
    unique: false,
  },

  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

// export UserSchema
module.exports = mongoose.model("User", UserSchema);
