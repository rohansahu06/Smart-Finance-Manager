const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },

        email: {
            type: String,
            lowercase: true,
            trim: true
        },

        purpose: {
            type: String,
            enum: ["login", "register", "deposit", "withdraw"],
            required: true
        },

        otpHash: {
            type: String,
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        },

        registrationData: {
            name: {
                type: String
            },

            phone: {
                type: String
            },

            password: {
                type: String
            }
        }
    },
    {
        timestamps: true,
        collection: "OTPs"
    }
);

const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;