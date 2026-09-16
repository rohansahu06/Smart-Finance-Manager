import React from 'react'
import'./Home_loan.css'
import Link from "next/link"
export default function HomeLoanPage() {
  return (
    <div className="home-loan-page">
      <h1>🏠 Secure Your Dream Home with Trusted Loans</h1>
      <p className="intro">
        Our Home Loan services are designed to help you own your dream house with
        flexible repayment options, low interest rates, and complete transparency.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Age: 21 – 65 years</li>
          <li>Minimum credit score: 650+</li>
          <li>Salaried or self-employed individuals</li>
          <li>Co-applicant allowed (spouse/parents)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Loan Features</h2>
        <ul>
          <li>Loan amount: ₹5 lakh – ₹5 crore</li>
          <li>Tenure: Up to 30 years</li>
          <li>Interest rate: 6.85% – 9.25% p.a.</li>
          <li>Processing fee: 0.5% – 1% of loan amount</li>
          <li>Prepayment/foreclosure allowed with minimal charges</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Identity proof (Aadhar, PAN, Passport)</li>
          <li>Address proof (Utility bill, Rent agreement)</li>
          <li>Income proof (Salary slips, IT returns)</li>
          <li>Property documents (Sale deed, NOC)</li>
          <li>Bank statements (last 6 months)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Loan sanctioned subject to property verification</li>
          <li>EMI auto-debit from savings account</li>
          <li>Property insurance may be mandatory</li>
          <li>Interest rates subject to RBI guidelines</li>
          <li>Default in EMI may lead to penalty charges</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Quick approval & digital processing <br />
          ✅ Flexible repayment options <br />
          ✅ Tax benefits under Section 80C & 24(b) <br />
          ✅ Dedicated relationship manager
        </p>
        <br/>
        <br/>
        <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
      </section>
    </div>
  );
}

