const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true
        },

        type: {
            type: String,
            enum: ["deposit", "withdraw"],
            required: true
        },

        amount: {
            type: Number,
            required: true,
            min: 1
        }
    },
    {
        timestamps: true
    }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;