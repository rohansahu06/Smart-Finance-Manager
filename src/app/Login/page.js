"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Login.css";
const API_URL = "https://smart-finance-manager-c55t.onrender.com";
export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);
    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                setIsLoading(false);
                return;
            }
            setShowOTP(true);
            alert("OTP is send on your email.");
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Failed to connect to server");
        }
        setIsLoading(false);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Email and password are required");
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const responseText = await response.text();
            console.log("LOGIN STATUS:", response.status);
            console.log("LOGIN URL:", response.url);
            console.log("LOGIN RESPONSE:", responseText);
            let data;
            try {
                data = JSON.parse(responseText);
            } catch (error) {
                console.error("JSON Parse Error:", error);
                alert("Server not give json response.");
                setIsLoading(false);
                return;
            }
            if (!response.ok) {
                alert(data.message);
                setIsLoading(false);
                return;
            }
            const otpResponse = await fetch(`${API_URL}/api/otp/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const otpData = await otpResponse.json();
            if (!otpResponse.ok) {
                alert(otpData.message);
                setIsLoading(false);
                return;
            }
            setShowOTP(true);
            alert("Login OTP is sent to your email.");
        } catch (error) {
            console.error("Login Error:", error);
            alert("Failed to connect to server");
        }
        setIsLoading(false);
    };
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!otp || otp.length !== 6) {
            alert("Please enter 6 digit OTP");
            return;
        }
        setIsLoading(true);
        try {
            const verifyURL = isLoginMode
                ? `${API_URL}/api/otp/verify`
                : `${API_URL}/api/auth/verify-register`;
            const response = await fetch(verifyURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    otp
                })
            });
            const data = await response.json();
            console.log("ACTUAL OTP VERIFY RESPONSE:", data);
            if (isLoginMode) {
                console.log("ACTUAL JWT TOKEN:", data.token);
            }
            if (!response.ok) {
                alert(data.message);
                setIsLoading(false);
                return;
            }
            if (isLoginMode) {
                if (!data.token) {
                    console.error("JWT TOKEN MISSING FROM RESPONSE:", data);
                    alert("Login successful, but JWT token was not received.");
                    setIsLoading(false);
                    return;
                }
                localStorage.setItem("token", data.token);
                console.log("JWT TOKEN SAVED:", localStorage.getItem("token"));
                alert("Login successful!");
            } else {
                alert(`Registration successful!\nAccount Number: ${data.accountNumber}`);
            }
            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            setOtp("");
            setShowOTP(false);
            router.push("/");
        } catch (error) {
            console.error("OTP Verification Error:", error);
            alert("Failed to connect to server");
        }
        setIsLoading(false);
    };
    const handleGoogleLogin = () => {
        window.location.href = `${API_URL}/api/auth/google`;
    };
    const switchMode = () => {
        setIsLoginMode(!isLoginMode);
        setShowOTP(false);
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setOtp("");
    };
    return (
        <div className="login-container">
            <h2 id="Heading">Access made easy, security made strong</h2>
            {!showOTP && (
                <form className="login-form" onSubmit={isLoginMode ? handleLogin : handleRegister}>
                    {!isLoginMode && (
                        <>
                            <div className="login-data">
                                <label>Full Name :</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="login-data">
                                <label>Phone No. :</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="login-data">
                        <label>Email Address :</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-data password-field">
                        <label>Password :</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="login-btn"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? (isLoginMode ? "Logging in..." : "Sending OTP...")
                            : (isLoginMode ? "Login" : "Create Account")}
                    </button>
                    {isLoginMode && (
                        <button
                            type="button"
                            className="google-login-btn"
                            onClick={handleGoogleLogin}
                        >
                            <span className="google-icon">
                                <i className="fa-brands fa-google"></i>
                            </span>
                            <span className="google-login-text">
                                Continue with Google
                            </span>
                        </button>
                    )}
                    <p>
                        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button type="button" onClick={switchMode}>
                            {isLoginMode ? "Create Account" : "Login"}
                        </button>
                    </p>
                </form>
            )}
            {showOTP && (
                <form className="login-form" onSubmit={handleVerifyOTP}>
                    <div className="login-data">
                        <label>Email Verification :</label>
                        <p>
                            {isLoginMode
                                ? "Login OTP is sent to your email."
                                : "OTP is sent to your email."}
                        </p>
                    </div>
                    <div className="login-data">
                        <label>Enter OTP :</label>
                        <input
                            type="text"
                            placeholder="Enter 6 digit OTP"
                            value={otp}
                            maxLength={6}
                            inputMode="numeric"
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                setOtp(value);
                            }}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
            )}
        </div>
    );
}