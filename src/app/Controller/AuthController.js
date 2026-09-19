const bcrypt = require("bcryptjs");

const User = require("../Models/User");
const Account = require("../Models/Account");

const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({
            $or: [{ email }, { phone }]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            authProvider: "local"
        });

        const accountNumber = Math.floor(
            1000000000 + Math.random() * 9000000000
        ).toString();

        await Account.create({
            userId: user._id,
            accountNumber,
            accountType: "Savings",
            balance: 0
        });

        res.status(201).json({
            message: "Registration successful",
            userId: user._id,
            accountNumber
        });

    } catch (error) {
        console.error("❌ Registration Error:", error.message);

        res.status(500).json({
            message: "Server error"
        });
    }
    
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
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
            message: "Email and password verified"
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
    loginUser
};

