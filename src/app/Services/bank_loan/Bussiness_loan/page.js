import React from 'react';
import './BusinessLoan.css';
import Link from "next/link"
export default function BusinessLoanPage() {
  return (
    <div className="business-loan-page">
      <h1>💼 Empower Your Business with Easy Loans</h1>
      <p className="intro">
        Our Business Loan services are designed to support entrepreneurs and SMEs
        with working capital, expansion, and growth opportunities at affordable
        interest rates.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Age: 21 – 65 years</li>
          <li>Indian resident with valid business registration</li>
          <li>Minimum 2 years of business operations</li>
          <li>Good credit history preferred</li>
        </ul>
      </section>

      <section className="section">
        <h2>Loan Features</h2>
        <ul>
          <li>Loan amount: ₹50,000 , ₹5 crore</li>
          <li>Tenure: 1 , 10 years</li>
          <li>Interest rate: 8% , 16% p.a.</li>
          <li>Quick approval & disbursal</li>
          <li>Collateral-free options available for SMEs</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Business registration certificate</li>
          <li>Identity proof (Aadhar, PAN, Passport)</li>
          <li>Address proof (Utility bill, Rent agreement)</li>
          <li>Bank statements (last 12 months)</li>
          <li>IT returns / GST filings</li>
          <li>Financial statements (Balance sheet, P&L)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Loan sanctioned subject to financial verification</li>
          <li>Collateral may be required for higher loan amounts</li>
          <li>EMI auto-debit from business account</li>
          <li>Prepayment allowed with minimal charges</li>
          <li>Default in repayment may affect credit score</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Easy access to working capital <br />
          ✅ Flexible repayment options <br />
          ✅ Collateral-free loans for SMEs <br />
          ✅ Dedicated relationship manager
        </p>
        <br/>
        <br/>
        <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
        
      </section>
    </div>
  );
}
