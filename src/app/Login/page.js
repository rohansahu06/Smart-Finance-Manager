"use client"
import React, { useState } from "react";
import "./Login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h2 id="Heading">Access made easy, security made strong</h2>

      <form className="login-form">
        <div className="login-data">
          <label>Full Name :</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="login-data">
          <label>Phone No. :</label>
          <input type="number" placeholder="Enter your number" />
        </div>

        <div className="login-data">
          <label>Email Address :</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="login-data password-field">
          <label>Password :</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
             onClick={() => setShowPassword(!showPassword)}
          />
          <img
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}
