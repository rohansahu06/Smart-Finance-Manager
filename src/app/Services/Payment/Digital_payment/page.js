"use client"
import React from "react";
import "./DigitalPayment.css";

export default function DigitalPaymentPage() {
  const payments = [
    {
      type: "UPI Payments",
      conditions: "Linked to bank account, daily transaction limits",
      benefits: "Instant, 24x7, QR code based"
    },
    {
      type: "Debit/Credit Card Payments",
      conditions: "Transaction limits, PIN/OTP required",
      benefits: "Widely accepted, secure"
    },
    {
      type: "Net Banking",
      conditions: "Requires login credentials, OTP verification",
      benefits: "Safe online transfers"
    },
    {
      type: "Mobile Wallets",
      conditions: "KYC required, wallet balance limits",
      benefits: "Easy app‑based payments"
    },
    {
      type: "Auto‑Debit / Standing Instructions",
      conditions: "Mandate setup required",
      benefits: "Best for bills & subscriptions"
    },
    {
      type: "BNPL (Buy Now Pay Later)",
      conditions: "Credit approval required",
      benefits: "Flexible repayment options"
    },
    {
      type: "International Payments",
      conditions: "Forex charges, RBI compliance",
      benefits: "Global transactions support"
    }
  ];

  return (
    <div className="payment-section">
      <h2>Digital Payment Services</h2>
      <p>
        Experience seamless and secure digital transactions with our wide range
        of payment options.
      </p>

      <div className="payment-grid">
        {payments.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.type}</h3>
            <p><strong>Conditions:</strong> {item.conditions}</p>
            <p><strong>Benefits:</strong> {item.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
