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
          <h2>Mr. Iswar bhai patel </h2>
          <p>
            Mr. Iswar bhai availed a loan for his chicken farming needs and is now
            doing well in his poltry farm.
          </p>
          <p><strong>Loan Purpose:</strong> Farming Needs</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
