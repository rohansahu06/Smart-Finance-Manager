"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";


export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img krishna"></div>
        <div className="credit-info">
          <h2>Mr. Krishna Rao</h2>
          <p>
            Mr. Krishna Rao took a loan from our bank to expand his business. 
            He is delighted with the support and continues to grow successfully.
          </p>
          <p><strong>Loan Purpose:</strong> Business Expansion</p>
          <p><strong>Status:</strong> Happy Customer</p>
        </div>
      </div>
    </div>
  );
}