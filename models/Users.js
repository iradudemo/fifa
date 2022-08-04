const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  role: {
    type: String,
    enum: ["manager", "player"],
    default: "player",
  },

  active: {
    type: Boolean,
    default: false,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});
