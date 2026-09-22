const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            tls: true,
            family: 4,
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000
        });
        console.log("✅ MongoDB Connected Successfully");
        console.log("📌 Database:", mongoose.connection.name);
        console.log("📌 Host:", mongoose.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        if (error.reason) {
            console.error("📌 MongoDB Error Reason:", error.reason);
        }
    }
};

module.exports = connectDB;