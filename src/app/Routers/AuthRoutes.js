const express = require("express");

const {

 registerUser,

 verifyRegisterOTP,

loginUser

} = require("../Controller/AuthController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/verify-register", verifyRegisterOTP);

router.post("/login", loginUser);

module.exports = router;