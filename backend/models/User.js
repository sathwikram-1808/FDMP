const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true,
    },

    password: String,

    tasksCompleted: {
      type: Number,
      default: 0,
    },

    role: {
      type: String,
      enum: ["donor", "volunteer", "admin"],
      default: "donor",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);