"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img dhanbai"></div>
        <div className="credit-info">
          <h2>Mrs. Dhan Bai</h2>
          <p>
            Mrs. Dhan Bai availed a loan for her farming activities and is now
            successfully managing her field.
          </p>
          <p><strong>Loan Purpose:</strong> Farming Activities</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
