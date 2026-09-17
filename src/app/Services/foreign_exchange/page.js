"use client"
import React from "react";
import "./foreign_exchange.css";

export default function ForeignExchangePage() {
  const forexServices = [
    {
      type: "Currency Exchange (Forex)",
      conditions: "Rates vary daily, RBI regulated, service charges apply",
      benefits: "Quick conversion for travel/business"
    },
    {
      type: "International Remittance (SWIFT/NEFT)",
      conditions: "KYC required, transfer limits as per RBI",
      benefits: "Secure money transfer abroad"
    },
    {
      type: "Travel Forex Card",
      conditions: "Preloaded card, validity 3–5 yrs, reloadable",
      benefits: "Safe & convenient for travelers"
    },
    {
      type: "Foreign Currency Demand Draft",
      conditions: "Issued against account balance, processing fee",
      benefits: "Reliable for education fees abroad"
    },
    {
      type: "Wire Transfer (SWIFT)",
      conditions: "1–3 business days, charges apply",
      benefits: "Fast global payments"
    },
    {
      type: "Foreign Investment Accounts (NRI/FCNR)",
      conditions: "Lock‑in varies, interest in foreign currency",
      benefits: "Safe savings for NRIs"
    },
    {
      type: "Export/Import Forex Services",
      conditions: "Documentation required, RBI compliance",
      benefits: "Support for businesses in global trade"
    }
  ];

  return (
    <div className="forex-section">
      <h2>Foreign Exchange Services</h2>
      <p>
        Manage your international transactions with ease. Our bank provides
        secure and transparent foreign exchange facilities for individuals and
        businesses.
      </p>

      <div className="forex-grid">
        {forexServices.map((item, index) => (
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
