const express = require("express");

const {
    getMyAccount,
    depositMoney,
    withdrawMoney
} = require("../Controller/AccountController");

const authMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();

router.get("/me", authMiddleware, getMyAccount);

router.post("/deposit", authMiddleware, depositMoney);

router.post("/withdraw", authMiddleware, withdrawMoney);

module.exports = router;