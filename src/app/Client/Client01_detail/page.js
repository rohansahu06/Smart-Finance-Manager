"use client";
import React from "react";
import "./Client01.css"; 


export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img"></div>
        <div className="credit-info">
          <h2>Miss Priya Deva</h2>
          <p>
            Miss Priya Deva is a successful businesswoman who took a loan from
            our bank to grow her business. Today, she stands as an inspiring
            example of entrepreneurial spirit and financial empowerment.
          </p>
          <p><strong>Loan Purpose:</strong> Business Growth</p>
          <p><strong>Status:</strong> Active Customer</p>
        </div>
      </div>
    </div>
  );
}
