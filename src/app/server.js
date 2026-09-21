require("dotenv").config({
    path: __dirname + "/.env"
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();

connectDB();

const authRoutes = require("./Routers/AuthRoutes");
const otpRoutes = require("./Routers/OTPRoutes");
const googleAuthRoutes = require("./Routers/GoogleAuthRoutes");
const accountRoutes = require("./Routers/AccountRoutes");
const transactionRoutes = require("./Routers/TransactionRoutes");
const transactionAuthRoutes = require("./Routers/TransactionAuthRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/auth", googleAuthRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/transaction-auth", transactionAuthRoutes);

app.get("/", (req, res) => {
    res.send("Bank Project Backend is Running ..✅✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});