const Donation = require("../models/Donation");
const User = require("../models/User");
const createDonation = async (
    req,
    res
  ) => {
    try {
  
      let priority = "Low";
  
      const quantity =
        parseInt(req.body.quantity);
  
      if (quantity >= 50) {
        priority = "High";
      }
      else if (quantity >= 20) {
        priority = "Medium";
      }
  
      const donation =
        await Donation.create({
          ...req.body,
          priority,
        });
  
      res.status(201).json({
        message: "Donation Added",
        donation,
      });
  
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();

    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const acceptDonation = async (req, res) => {
    try {
  
      const { volunteer } = req.body;
  
      const donation =
        await Donation.findByIdAndUpdate(
          req.params.id,
          {
            status: "Accepted",
            volunteer,
          },
          { new: true }
        );
  
      res.status(200).json({
        message: "Request Accepted",
        donation,
      });
  
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  const completeDonation = async (
    req,
    res
  ) => {
    try {
  
      const donation =
        await Donation.findByIdAndUpdate(
          req.params.id,
          {
            status: "Completed",
          },
          { new: true }
        );
  
      const volunteerUser =
        await User.findOne({
          name: donation.volunteer,
        });
  
      if (volunteerUser) {
  
        volunteerUser.tasksCompleted += 1;
  
        await volunteerUser.save();
      }
  
      res.status(200).json({
        message: "Delivery Completed",
        donation,
      });
  
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  module.exports = {
    createDonation,
    getDonations,
    acceptDonation,
    completeDonation,
  };