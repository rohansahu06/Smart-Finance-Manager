const jwt = require("jsonwebtoken");

const User = require("../Models/User");
const OTP = require("../Models/OTP");

const {
    generateOTP,
    hashOTP,
    verifyOTP
} = require("../Utils/OTP.js");

const {
    sendOTPEmail
} = require("../BackendServices/EmailService");

const sendLoginOTP = async (req, res) => {
    try {

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
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

        const otp = generateOTP();

        const otpHash = await hashOTP(otp);

        await OTP.deleteMany({
            userId: user._id,
            purpose: "login"
        });

        await OTP.create({
            userId: user._id,
            purpose: "login",
            otpHash: otpHash,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        });

        await sendOTPEmail(user.email, otp);

        res.status(200).json({
            message: "OTP sent successfully"
        });

    } catch (error) {

        console.error("❌ Send OTP Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


const verifyLoginOTP = async (req, res) => {
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

        const otpRecord = await OTP.findOne({
            userId: user._id,
            purpose: "login"
        });

        if (!otpRecord) {
            return res.status(400).json({
                message: "OTP not found"
            });
        }

        if (otpRecord.expiresAt < new Date()) {

            await OTP.deleteOne({
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

        await OTP.deleteOne({
            _id: otpRecord._id
        });

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );


        res.status(200).json({
            message: "OTP verified successfully",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture
            }
        });

    } catch (error) {

        console.error("❌ Verify OTP Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    sendLoginOTP,
    verifyLoginOTP
};