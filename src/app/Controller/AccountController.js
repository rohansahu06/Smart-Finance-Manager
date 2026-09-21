const Account = require("../Models/Account");
const User = require("../Models/User");

// =====================================
// GET MY ACCOUNT
// =====================================

const getMyAccount = async (req, res) => {
    try {
        const userId = req.user.userId;

        const account = await Account.findOne({ userId })
            .populate("userId", "name email phone");

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }

        res.status(200).json({
            message: "Account details fetched successfully",
            account
        });

    } catch (error) {
        console.error("Get Account Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// =====================================
// DEPOSIT MONEY
// =====================================

const depositMoney = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                message: "Please enter a valid deposit amount"
            });
        }

        const account = await Account.findOne({ userId });

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }

        account.balance += Number(amount);

        await account.save();

        res.status(200).json({
            message: "Money deposited successfully",
            balance: account.balance
        });

    } catch (error) {
        console.error("Deposit Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// =====================================
// WITHDRAW MONEY
// =====================================

const withdrawMoney = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                message: "Please enter a valid withdrawal amount"
            });
        }

        const account = await Account.findOne({ userId });

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }

        if (Number(amount) > account.balance) {
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        account.balance -= Number(amount);

        await account.save();

        res.status(200).json({
            message: "Money withdrawn successfully",
            balance: account.balance
        });

    } catch (error) {
        console.error("Withdraw Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    getMyAccount,
    depositMoney,
    withdrawMoney
};