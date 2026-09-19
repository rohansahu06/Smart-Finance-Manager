const express = require("express");

const {
    sendLoginOTP,
    verifyLoginOTP
} = require("../Controller/OTPController");

const router = express.Router();

router.post("/send", sendLoginOTP);

router.post("/verify", verifyLoginOTP);

module.exports = router;