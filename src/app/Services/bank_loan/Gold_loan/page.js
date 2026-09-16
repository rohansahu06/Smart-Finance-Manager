import React from 'react';
import'./goldloan.css'
import Link from "next/link"
export default function GoldLoanPage() {
  return (
    <div className="gold-loan-page">
      <h1>🏦 Secure Your Gold, Unlock Your Dreams</h1>
      <p className="intro">
        Our Gold Loan services provide instant funds against your gold jewellery
        with complete safety, transparency, and flexible repayment options.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Age: 18 – 70 years</li>
          <li>Indian residents only</li>
          <li>Gold jewellery (22K/24K) accepted</li>
          <li>No income proof required</li>
        </ul>
      </section>

      <section className="section">
        <h2>Loan Features</h2>
        <ul>
          <li>Loan amount: ₹10,000 – ₹50 lakh</li>
          <li>Tenure: 3 months – 3 years</li>
          <li>Interest rate: 6.5% – 12% p.a.</li>
          <li>Quick disbursal within hours</li>
          <li>Flexible repayment (EMI / bullet payment)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Identity proof (Aadhar, PAN, Passport)</li>
          <li>Address proof (Utility bill, Driving license)</li>
          <li>Photographs</li>
          <li>Gold valuation report (done by bank)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Gold purity verification mandatory</li>
          <li>Loan sanctioned only against jewellery, not coins/bars</li>
          <li>Default in repayment may lead to auction of pledged gold</li>
          <li>Interest rates subject to RBI guidelines</li>
          <li>Premature closure allowed with minimal charges</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Instant loan approval <br />
          ✅ Safe storage of gold <br />
          ✅ Flexible repayment options <br />
          ✅ Transparent process with no hidden charges
        </p>
        <br/>
        <br/>
         <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
      </section>
    </div>
  );
}
