// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {sendMail} = require("../controller/SendOtp")


router.post("/sendMail" , sendMail);

// Export the router for use in the main application
module.exports = router