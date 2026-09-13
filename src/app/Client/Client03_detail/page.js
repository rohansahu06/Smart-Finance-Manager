"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";   

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img ram"></div>
        <div className="credit-info">
          <h2>Mr. Ram Kumar Patel</h2>
          <p>
            Mr. Ram Kumar Patel availed a loan from our bank to strengthen his 
            business operations. He is very satisfied and continues to thrive.
          </p>
          <p><strong>Loan Purpose:</strong> Operational Growth</p>
          <p><strong>Status:</strong> Happy Customer</p>
        </div>
      </div>
    </div>
  );
}
