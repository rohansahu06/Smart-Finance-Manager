"use client"
import React from "react";
import "./Card_based.css";

export default function CardPaymentPage() {
  const cardServices = [
    {
      type: "Debit Card Payments",
      conditions: "Linked to savings/current account, PIN/OTP required",
      benefits: "Instant payments, secure, widely accepted"
    },
    {
      type: "Credit Card Payments",
      conditions: "Credit limit, monthly billing cycle, interest if unpaid",
      benefits: "Pay later, reward points, EMI options"
    },
    {
      type: "Prepaid Cards",
      conditions: "Rechargeable, spending limit set by user",
      benefits: "Controlled spending, gift cards"
    },
    {
      type: "International Card Usage",
      conditions: "Forex charges, RBI compliance, OTP verification",
      benefits: "Global acceptance, travel convenience"
    },
    {
      type: "Contactless Payments (NFC)",
      conditions: "Daily transaction limits, enabled on select cards",
      benefits: "Tap‑and‑pay, faster checkout"
    }
  ];

  return (
    <div className="card-section">
      <h2>Card Payment Services</h2>
      <p>
        Our bank offers secure and convenient card payment solutions for everyday
        transactions, online shopping, and international travel.
      </p>

      <div className="card-grid">
        {cardServices.map((item, index) => (
          <div className="card-box" key={index}>
            <h3>{item.type}</h3>
            <p><strong>Conditions:</strong> {item.conditions}</p>
            <p><strong>Benefits:</strong> {item.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
