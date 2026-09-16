"use client"
import React from 'react';
import './AgriLoan.css';
import Link from "next/link"

export default function AgricultureLoanPage() {
  return (
    <div className="agriculture-loan-page">
      <h1>🌾 Empower Farmers with Agriculture Loans</h1>
      <p className="intro">
        Our Agriculture Loan services provide financial support for farmers to
        invest in crops, equipment, irrigation, and allied activities with
        affordable interest rates and flexible repayment options.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Applicant age: 18 , 70 years</li>
          <li>Farmers, tenant farmers, sharecroppers, and self-help groups</li>
          <li>Proof of agricultural land or farming activity</li>
          <li>Valid KYC documents</li>
        </ul>
      </section>

      <section className="section">
        <h2>Loan Features</h2>
        <ul>
          <li>Loan amount: ₹10,000 , ₹25 lakh</li>
          <li>Tenure: 6 months , 7 years</li>
          <li>Interest rate: 4%  7% p.a. (subsidized under schemes)</li>
          <li>Kisan Credit Card (KCC) facility available</li>
          <li>Quick disbursal for seasonal needs</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Identity proof (Aadhar, PAN, Voter ID)</li>
          <li>Address proof (Utility bill, Ration card)</li>
          <li>Land ownership/lease documents</li>
          <li>Bank statements (last 6 months)</li>
          <li>Photographs</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Loan sanctioned subject to land verification</li>
          <li>Subsidy available under government schemes (NABARD, PM-Kisan)</li>
          <li>Repayment aligned with crop harvesting cycle</li>
          <li>Default in repayment may affect credit score</li>
          <li>Insurance of crops may be mandatory</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Easy access to seasonal credit <br />
          ✅ Subsidized interest rates <br />
          ✅ Flexible repayment aligned with harvest <br />
          ✅ Support for equipment, seeds, and irrigation
        </p>
        <br/>
        <br/>
        <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
      </section>
    </div>
  );
}
