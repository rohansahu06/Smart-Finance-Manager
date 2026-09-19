const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const generateOTP = () => {
    return crypto.randomInt(100000, 1000000).toString();
};

const hashOTP = async (otp) => {
    return await bcrypt.hash(otp, 10);
};

const verifyOTP = async (otp, otpHash) => {
    return await bcrypt.compare(otp, otpHash);
};

module.exports = {
    generateOTP,
    hashOTP,
    verifyOTP
};