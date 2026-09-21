const Transaction = require("../Models/Transaction");
const Account = require("../Models/Account");
const TransactionOTP = require("../Models/TransactionOTP");


// ==========================================
// GET MY TRANSACTION HISTORY
// ==========================================

const getMyTransactions = async (req, res) => {
    try {
        const userId = req.user.userId;

        const account = await Account.findOne({
            userId
        });

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }

        const transactions = await Transaction.find({
            accountId: account._id
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            message: "Transaction history fetched successfully",
            transactions
        });

    } catch (error) {
        console.error(
            "Get Transactions Error:",
            error
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ==========================================
// CREATE DEPOSIT TRANSACTION
// ==========================================

const createDepositTransaction = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { amount } = req.body;

        const depositAmount = Number(amount);

        if (
            !Number.isFinite(depositAmount) ||
            depositAmount <= 0
        ) {
            return res.status(400).json({
                message: "Please enter a valid deposit amount"
            });
        }

        const account = await Account.findOne({
            userId
        });

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }

        account.balance += depositAmount;

        await account.save();

        const transaction = await Transaction.create({
            accountId: account._id,
            type: "deposit",
            amount: depositAmount
        });

        res.status(200).json({
            message: "Deposit successful",
            balance: account.balance,
            transaction
        });

    } catch (error) {
        console.error(
            "Deposit Transaction Error:",
            error
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ==========================================
// CREATE WITHDRAW TRANSACTION
// ==========================================

const createWithdrawTransaction = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { amount } = req.body;

        const withdrawAmount = Number(amount);

        if (
            !Number.isFinite(withdrawAmount) ||
            withdrawAmount <= 0
        ) {
            return res.status(400).json({
                message: "Please enter a valid withdrawal amount"
            });
        }


        // ==========================================
        // CHECK WITHDRAW OTP VERIFICATION
        // ==========================================

        const withdrawVerification = await TransactionOTP.findOne({
            userId: userId,
            purpose: "withdraw",
            verified: true
        });

        if (!withdrawVerification) {
            return res.status(403).json({
                message:
                    "Withdraw OTP verification required"
            });
        }


        // OTP verification must be recent

        if (
            !withdrawVerification.verifiedAt ||
            Date.now() -
                new Date(
                    withdrawVerification.verifiedAt
                ).getTime() >
                5 * 60 * 1000
        ) {
            await TransactionOTP.deleteOne({
                _id: withdrawVerification._id
            });

            return res.status(403).json({
                message:
                    "Withdraw verification expired. Please verify OTP again."
            });
        }


        const account = await Account.findOne({
            userId
        });

        if (!account) {
            return res.status(404).json({
                message: "Bank account not found"
            });
        }


        if (withdrawAmount > account.balance) {
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }


        account.balance -= withdrawAmount;

        await account.save();


        const transaction = await Transaction.create({
            accountId: account._id,
            type: "withdraw",
            amount: withdrawAmount
        });


        // ==========================================
        // CONSUME OTP AFTER SUCCESSFUL WITHDRAW
        // ==========================================

        await TransactionOTP.deleteOne({
            _id: withdrawVerification._id
        });


        res.status(200).json({
            message: "Withdrawal successful",
            balance: account.balance,
            transaction
        });

    } catch (error) {
        console.error(
            "Withdraw Transaction Error:",
            error
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    getMyTransactions,
    createDepositTransaction,
    createWithdrawTransaction
};