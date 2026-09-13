"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img rajesh"></div>
        <div className="credit-info">
          <h2>Mr. Rajesh Yadav</h2>
          <p>
            Mr. Rajesh Yadav availed a loan for his farming needs and is now
            doing well in his field.
          </p>
          <p><strong>Loan Purpose:</strong> Farming Needs</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
