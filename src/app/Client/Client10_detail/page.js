"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img gaytri"></div>
        <div className="credit-info">
          <h2>Mrs. Gaytri Devi</h2>
          <p>
            Mrs. Gaytri Devi took a loan for her agricultural work and is now
            thriving in her farming journey.
          </p>
          <p><strong>Loan Purpose:</strong> Agricultural Work</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
