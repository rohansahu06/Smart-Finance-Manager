const mongoose = require("mongoose");

const transactionOTPSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        otpHash: {
            type: String,
            required: true
        },

        purpose: {
            type: String,
            enum: ["transaction", "withdraw"],
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        },

        verified: {
            type: Boolean,
            default: false
        },

        verifiedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const TransactionOTP = mongoose.model(
    "TransactionOTP",
    transactionOTPSchema
);

module.exports = TransactionOTP;