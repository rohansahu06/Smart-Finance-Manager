"use client";

import React, { useState } from "react";
import "./Login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

    } catch (error) {
      console.error("Login Error:", error);
      alert("Server se connect nahi ho pa raha hai");
    }
  };

  return (
    <div className="login-container">
      <h2 id="Heading">Access made easy, security made strong</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-data">
          <label>Full Name :</label>
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="login-data">
          <label>Phone No. :</label>
          <input
            type="number"
            placeholder="Enter your number"
          />
        </div>

        <div className="login-data">
          <label>Email Address :</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-data password-field">
          <label>Password :</label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <img />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}