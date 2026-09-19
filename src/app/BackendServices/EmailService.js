const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOTPEmail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "PayZen Bank - OTP Verification",
            text: `PayZen Bank Project OTP is ${otp}. This OTP is valid for 5 minutes.`
        });

        console.log(`✅ OTP sent to ${email}`);
    } catch (error) {
        console.error("❌ Failed to send OTP:", error.message);
        throw error;
    }
};

module.exports = {
    sendOTPEmail
};