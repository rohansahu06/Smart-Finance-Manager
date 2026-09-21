const bcrypt = require("bcryptjs");

const User = require("../Models/User");
const Account = require("../Models/Account");
const OTP = require("../Models/OTP");

const {
    generateOTP,
    hashOTP,
    verifyOTP
} = require("../Utils/OTP");

const {
    sendOTPEmail
} = require("../BackendServices/EmailService");


// =====================================
// REGISTER - SEND OTP
// =====================================

const registerUser = async (req, res) => {
    try {

        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const cleanName = name.trim();
        const cleanEmail = email.toLowerCase().trim();
        const cleanPhone = phone.trim();

        // Check existing user
        const existingUser = await User.findOne({
            $or: [
                { email: cleanEmail },
                { phone: cleanPhone }
            ]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Email or phone number already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = generateOTP();

        // Hash OTP
        const otpHash = await hashOTP(otp);

        // Delete previous registration OTP
        await OTP.deleteMany({
            email: cleanEmail,
            purpose: "register"
        });

        // Save temporary registration data
        await OTP.create({
            email: cleanEmail,
            purpose: "register",
            otpHash: otpHash,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000),

            registrationData: {
                name: cleanName,
                phone: cleanPhone,
                password: hashedPassword
            }
        });

        // Send OTP to email
        await sendOTPEmail(cleanEmail, otp);

        res.status(200).json({
            message: "OTP sent successfully"
        });

    } catch (error) {

        console.error("❌ Registration OTP Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


// =====================================
// VERIFY REGISTRATION OTP
// =====================================

const verifyRegisterOTP = async (req, res) => {
    try {

        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }

        const cleanEmail = email.toLowerCase().trim();

        // Find registration OTP
        const otpRecord = await OTP.findOne({
            email: cleanEmail,
            purpose: "register"
        });

        if (!otpRecord) {
            return res.status(400).json({
                message: "OTP not found or already used"
            });
        }

        // Check OTP expiry
        if (otpRecord.expiresAt < new Date()) {

            await OTP.deleteOne({
                _id: otpRecord._id
            });

            return res.status(400).json({
                message: "OTP expired"
            });
        }

        // Verify OTP
        const isOTPValid = await verifyOTP(
            otp,
            otpRecord.otpHash
        );

        if (!isOTPValid) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        // Check temporary registration data
        if (!otpRecord.registrationData) {
            return res.status(400).json({
                message: "Registration data not found"
            });
        }

        const {
            name,
            phone,
            password
        } = otpRecord.registrationData;

        // Double-check duplicate user
        const existingUser = await User.findOne({
            $or: [
                { email: cleanEmail },
                { phone: phone }
            ]
        });

        if (existingUser) {

            await OTP.deleteOne({
                _id: otpRecord._id
            });

            return res.status(409).json({
                message: "Email or phone number already registered"
            });
        }

        // Create user
        const user = await User.create({
            name,
            email: cleanEmail,
            phone,
            password,
            authProvider: "local"
        });

        // Generate account number
        const accountNumber = Math.floor(
            1000000000 + Math.random() * 9000000000
        ).toString();

        // Create bank account
        await Account.create({
            userId: user._id,
            accountNumber,
            accountType: "Savings",
            balance: 0
        });

        // Delete OTP after successful verification
        await OTP.deleteOne({
            _id: otpRecord._id
        });

        res.status(201).json({
            message: "Registration successful",
            userId: user._id,
            accountNumber
        });

    } catch (error) {

        console.error(
            "❌ Verify Registration OTP Error:",
            error.message
        );

        res.status(500).json({
            message: "Server error"
        });
    }
};


// =====================================
// LOGIN
// =====================================

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const cleanEmail = email.toLowerCase().trim();

        const user = await User.findOne({
            email: cleanEmail
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
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

        res.status(200).json({
            message: "Email and password verified successfully✅"
        });

    } catch (error) {

        console.error("❌ Login Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
};


module.exports = {
    registerUser,
    verifyRegisterOTP,
    loginUser
};