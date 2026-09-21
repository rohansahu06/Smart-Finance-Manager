const express = require("express");

const {
    verifyTransactionCredentials,
    verifyTransactionOTP,
    sendWithdrawOTP,
    verifyWithdrawOTP
} = require("../Controller/TransactionAuthController");

const authMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();


// Initial transaction verification

router.post(
    "/verify-credentials",
    authMiddleware,
    verifyTransactionCredentials
);

router.post(
    "/verify-otp",
    authMiddleware,
    verifyTransactionOTP
);


// Withdraw verification

router.post(
    "/withdraw/send-otp",
    authMiddleware,
    sendWithdrawOTP
);

router.post(
    "/withdraw/verify-otp",
    authMiddleware,
    verifyWithdrawOTP
);


module.exports = router;