"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img abhijeet"></div>
        <div className="credit-info">
          <h2>Mr. Abhijeet Das</h2>
          <p>
            Mr. Abhijeet Das availed a loan to expand his agricultural work.
            He is satisfied and thriving in his farming journey.
          </p>
          <p><strong>Loan Purpose:</strong> Agricultural Expansion</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
