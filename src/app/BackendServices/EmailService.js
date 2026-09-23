const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendOTPEmail = async (email, otp) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "PayZen Bank <onboarding@resend.dev>",
            to: [email],
            subject: "PayZen Bank - OTP Verification",
            text: `PayZen Bank Project OTP is ${otp}. This OTP is valid for 5 minutes.`
        });
        if (error) {
            console.error("❌ Resend Error:", error);
            throw new Error(error.message || "Email sending failed");
        }
        console.log(`✅ OTP sent to ${email}`, data?.id || "");
    } catch (error) {
        console.error("❌ Failed to send OTP:", error.message);
        throw error;
    }
};

module.exports = { sendOTPEmail };