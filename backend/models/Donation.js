const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    foodType: String,

    quantity: String,

    location: String,

    expiry: String,

    donorName: String,

    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Completed",
      ],
      default: "Pending",
    },
    priority: {
        type: String,
        default: "Low",
      },

    volunteer: {
      type: String,
      default: "Not Assigned",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Donation",
  donationSchema
);