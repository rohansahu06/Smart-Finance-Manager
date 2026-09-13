"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";  

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img abhinav"></div>
        <div className="credit-info">
          <h2>Mr. Abhinav Gupta</h2>
          <p>
            Mr. Abhinav Gupta took a loan from our bank for his farming needs.
            He is now doing well in his field and continues to grow successfully.
          </p>
          <p><strong>Loan Purpose:</strong> Farming Development</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
