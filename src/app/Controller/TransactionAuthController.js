const bcrypt = require("bcryptjs");

const User = require("../Models/User");
const TransactionOTP = require("../Models/TransactionOTP");

const {
    generateOTP,
    hashOTP,
    verifyOTP
} = require("../Utils/OTP.js");

const {
    sendOTPEmail
} = require("../BackendServices/EmailService");


// ==========================================
// VERIFY EMAIL + PASSWORD
// THEN SEND TRANSACTION OTP
// ==========================================

const verifyTransactionCredentials = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase().trim()
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        if (user.authProvider !== "local") {
            return res.status(400).json({
                message:
                    "Password verification is not available for Google login"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const otp = generateOTP();

        const otpHash = await hashOTP(otp);

        await TransactionOTP.deleteMany({
            userId: user._id
        });

        await TransactionOTP.create({
            userId: user._id,
            otpHash: otpHash,
            purpose: "transaction",
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        });

        await sendOTPEmail(user.email, otp);

        res.status(200).json({
            message: "Transaction OTP sent successfully"
        });

    } catch (error) {
        console.error(
            "Transaction Credential Verification Error:",
            error.message
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ==========================================
// VERIFY INITIAL TRANSACTION OTP
// ==========================================

const verifyTransactionOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase().trim()
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const otpRecord = await TransactionOTP.findOne({
            userId: user._id,
            purpose: "transaction"
        });

        if (!otpRecord) {
            return res.status(400).json({
                message: "OTP not found"
            });
        }

        if (otpRecord.expiresAt < new Date()) {
            await TransactionOTP.deleteOne({
                _id: otpRecord._id
            });

            return res.status(400).json({
                message: "OTP expired"
            });
        }

        const isOTPValid = await verifyOTP(
            otp,
            otpRecord.otpHash
        );

        if (!isOTPValid) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        await TransactionOTP.deleteOne({
            _id: otpRecord._id
        });

        res.status(200).json({
            message: "Transaction verification successful",
            verified: true
        });

    } catch (error) {
        console.error(
            "Transaction OTP Verification Error:",
            error.message
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ==========================================
// SEND WITHDRAW OTP
// ==========================================

const sendWithdrawOTP = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.authProvider !== "local") {
            return res.status(400).json({
                message:
                    "Withdraw OTP is not available for Google login"
            });
        }

        const otp = generateOTP();

        const otpHash = await hashOTP(otp);

        await TransactionOTP.deleteMany({
            userId: user._id,
            purpose: "withdraw"
        });

        await TransactionOTP.create({
            userId: user._id,
            otpHash: otpHash,
            purpose: "withdraw",
            expiresAt: new Date(Date.now() + 5 * 60 * 1000),
            verified: false
        });

        await sendOTPEmail(user.email, otp);

        res.status(200).json({
            message: "Withdraw OTP sent successfully"
        });

    } catch (error) {
        console.error(
            "Send Withdraw OTP Error:",
            error.message
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// ==========================================
// VERIFY WITHDRAW OTP
// ==========================================

const verifyWithdrawOTP = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { otp } = req.body;

        if (!otp) {
            return res.status(400).json({
                message: "OTP is required"
            });
        }

        const otpRecord = await TransactionOTP.findOne({
            userId: userId,
            purpose: "withdraw"
        });

        if (!otpRecord) {
            return res.status(400).json({
                message: "Withdraw OTP not found"
            });
        }

        if (otpRecord.expiresAt < new Date()) {
            await TransactionOTP.deleteOne({
                _id: otpRecord._id
            });

            return res.status(400).json({
                message: "Withdraw OTP expired"
            });
        }

        if (otpRecord.verified) {
            return res.status(400).json({
                message: "Withdraw OTP already used"
            });
        }

        const isOTPValid = await verifyOTP(
            otp,
            otpRecord.otpHash
        );

        if (!isOTPValid) {
            return res.status(400).json({
                message: "Invalid withdraw OTP"
            });
        }

        otpRecord.verified = true;
        otpRecord.verifiedAt = new Date();

        await otpRecord.save();

        res.status(200).json({
            message: "Withdraw verification successful",
            verified: true
        });

    } catch (error) {
        console.error(
            "Verify Withdraw OTP Error:",
            error.message
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    verifyTransactionCredentials,
    verifyTransactionOTP,
    sendWithdrawOTP,
    verifyWithdrawOTP
};