"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img sukhdev"></div>
        <div className="credit-info">
          <h2>Mr. Sukhdev Gupta</h2>
          <p>
            Mr. Sukhdev Gupta took a loan for crop cultivation and is now
            achieving great results in his farming.
          </p>
          <p><strong>Loan Purpose:</strong> Crop Cultivation</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
