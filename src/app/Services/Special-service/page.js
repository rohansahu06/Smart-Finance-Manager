"use client"
import React from "react";
import "./SpecialServices.css";

export default function SpecialServicesPage() {
  const services = [
    {
      type: "Doorstep Banking",
      conditions: "Available in select cities, service charges may apply",
      benefits: "Cash pickup/delivery at home"
    },
    {
      type: "Government Scheme Support",
      conditions: "Eligibility as per scheme rules",
      benefits: "Easy access to PM Jan Dhan, Mudra loans"
    },
    {
      type: "Corporate Banking",
      conditions: "For registered businesses, documentation required",
      benefits: "Customized solutions for enterprises"
    },
    {
      type: "Digital Wallet Integration",
      conditions: "Linked to savings account, daily limits apply",
      benefits: "Instant payments via mobile"
    },
    {
      type: "NRI Banking Services",
      conditions: "Valid passport & KYC required",
      benefits: "NRE/NRO accounts, remittances"
    },
    {
      type: "Priority Banking",
      conditions: "Minimum balance criteria",
      benefits: "Dedicated relationship manager"
    },
    {
      type: "Wealth Management",
      conditions: "Investment portfolio minimum",
      benefits: "Personalized advisory & planning"
    }
  ];

  return (
    <div className="special-section">
      <h2>Special Services</h2>
      <p>
        Explore our unique services designed to simplify life and empower
        customers with convenience, innovation, and trust.
      </p>

      <div className="special-grid">
        {services.map((item, index) => (
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
