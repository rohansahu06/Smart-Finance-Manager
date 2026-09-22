const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            family: 4,
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000
        });
        console.log("✅ MongoDB Connected Successfully");
        console.log("📌 Database:", mongoose.connection.name);
        console.log("📌 Host:", mongoose.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.error("⚠️ MongoDB Disconnected");
});
mongoose.connection.on("error", (error) => {
    console.error("❌ MongoDB Runtime Error:", error.message);
});
module.exports = connectDB;