"use client"
import React from "react";
import "./Bank_transfer.css";

export default function BankTransferPage() {
  const transfers = [
    {
      type: "NEFT (National Electronic Funds Transfer)",
      conditions: "Available in batches, RBI timings apply",
      benefits: "Safe, widely used, low charges"
    },
    {
      type: "RTGS (Real Time Gross Settlement)",
      conditions: "Minimum ₹2 lakh, real‑time settlement",
      benefits: "Instant large‑value transfers"
    },
    {
      type: "IMPS (Immediate Payment Service)",
      conditions: "24x7, limit up to ₹2 lakh",
      benefits: "Instant small transfers"
    },
    {
      type: "UPI Transfer",
      conditions: "Linked to bank account, daily limits",
      benefits: "QR code based, instant"
    },
    {
      type: "SWIFT/International Transfer",
      conditions: "Forex charges, RBI compliance, 1–3 days",
      benefits: "Global transactions support"
    }
  ];

  return (
    <div className="transfer-section">
      <h2>Bank Transfer Services</h2>
      <p>
        Our bank provides secure and reliable transfer facilities for domestic
        and international transactions.
      </p>

      <div className="transfer-grid">
        {transfers.map((item, index) => (
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
