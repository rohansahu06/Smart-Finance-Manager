const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOTPEmail = async (email, otp) => {
    try {
        const mailInfo = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "PayZen Bank - OTP Verification",
            text: `PayZen Bank Project OTP is ${otp}. This OTP is valid for 5 minutes.`
        });

        console.log("✅ OTP email accepted by SMTP");
        console.log("📧 Recipient:", email);
       

        return mailInfo;

    } catch (error) {
        console.error("❌ Failed to send OTP email");
        console.error("Error:", error.message);

        throw error;
    }
};

module.exports = {
    sendOTPEmail
};