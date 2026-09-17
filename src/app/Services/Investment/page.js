"use client"
import React from "react";
import "./Investment.css";

export default function InvestmentPage() {
  const investments = [
    {
      type: "Savings Account",
      conditions: "No lock-in, 2.5-4% interest, taxable beyond ₹10,000",
      benefits: "High liquidity, instant access"
    },
    {
      type: "Fixed Deposit (FD)",
      conditions: "7 days-10 yrs, 3-7.5% interest, taxable",
      benefits: "Safe returns, flexible tenure"
    },
    {
      type: "Recurring Deposit (RD)",
      conditions: "6 months-10 yrs, 3-7% interest, taxable",
      benefits: "Regular savings habit"
    },
    {
      type: "Tax-Saving FD",
      conditions: "5 yrs lock-in, 6.5-7.5% interest, eligible under 80C",
      benefits: "Tax benefits, guaranteed returns"
    },
    {
      type: "Bonds (via banks)",
      conditions: "5+ yrs, 7-8.5% interest, LTCG possible",
      benefits: "Stable long-term investment"
    },
    {
      type: "Mutual Funds (via bank tie-ups)",
      conditions: "Market-linked, no fixed lock-in, returns vary",
      benefits: "Diversification, higher growth potential"
    },
    {
      type: "Public Provident Fund (PPF)",
      conditions: "15 yrs lock-in, tax-free returns",
      benefits: "Retirement planning, safe & government backed"
    },
    {
      type: "Sovereign Gold Bonds",
      conditions: "8 yrs maturity, 2.5% fixed + gold price",
      benefits: "Hedge against inflation, RBI backed"
    },
    {
      type: "National Pension System (NPS)",
      conditions: "Till retirement, tax benefits",
      benefits: "Secure retirement income"
    }
  ];

  return (
    <div className="investment-section">
      <h2>Investment Services</h2>
      <p>
        Explore secure and diverse investment options offered by our bank. Each
        product is designed to meet different financial goals with clear
        conditions and benefits.
      </p>

      <div className="investment-grid">
        {investments.map((item, index) => (
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
