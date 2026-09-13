"use client";
import React from "react";
import "../Client01_detail/Clientstyle.css";

export default function Page() {
  return (
    <div className="credit-page">
      <h1 className="heading">Customer Credit Details</h1>
      <div className="credit-card">
        <div className="credit-img devi"></div>
        <div className="credit-info">
          <h2>Mr. Devi Laal Yadav</h2>
          <p>
            Mr. Devi Laal Yadav took a loan for his farm and is now doing well
            in his field.
          </p>
          <p><strong>Loan Purpose:</strong> Farm Development</p>
          <p><strong>Status:</strong> Happy Farmer</p>
        </div>
      </div>
    </div>
  );
}
