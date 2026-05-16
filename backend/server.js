const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const donationRoutes = require("./routes/donationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Working Successfully");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});