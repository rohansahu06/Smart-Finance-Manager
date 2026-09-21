const express = require("express");

const {
    getMyTransactions,
    createDepositTransaction,
    createWithdrawTransaction
} = require("../Controller/TransactionController");

const authMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();

// Get transaction history
router.get(
    "/history",
    authMiddleware,
    getMyTransactions
);

// Deposit money
router.post(
    "/deposit",
    authMiddleware,
    createDepositTransaction
);

// Withdraw money
router.post(
    "/withdraw",
    authMiddleware,
    createWithdrawTransaction
);

module.exports = router;