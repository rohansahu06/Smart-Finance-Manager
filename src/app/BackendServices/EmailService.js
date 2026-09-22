const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 60000
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

module.exports = { sendOTPEmail };