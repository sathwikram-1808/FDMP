const express = require("express");

const router = express.Router();

const {
    createDonation,
    getDonations,
    acceptDonation,
    completeDonation,
  } = require("../controllers/donationController");
router.post("/", createDonation);

router.get("/", getDonations);

router.put(
    "/complete/:id",
    completeDonation
  ); 

router.put("/accept/:id", acceptDonation);

module.exports = router;