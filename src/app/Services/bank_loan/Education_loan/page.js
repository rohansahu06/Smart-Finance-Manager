import React from 'react';
import './EducationLoan.css';
import Link from "next/link"
export default function EducationLoanPage() {
  return (
    <div className="education-loan-page">
      <h1>🎓 Fulfill Your Education Dreams with Easy Loans</h1>
      <p className="intro">
        Our Education Loan services are designed to support students in pursuing
        higher studies in India or abroad with flexible repayment options and
        affordable interest rates.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Applicant age: 18 – 35 years</li>
          <li>Indian resident with admission in recognized institution</li>
          <li>Co-applicant (parent/guardian) required</li>
          <li>Good academic record preferred</li>
        </ul>
      </section>

      <section className="section">
        <h2>Loan Features</h2>
        <ul>
          <li>Loan amount: ₹50,000 – ₹40 lakh</li>
          <li>Tenure: Up to 15 years</li>
          <li>Interest rate: 7.5% – 13% p.a.</li>
          <li>Moratorium: Course period + 6 months</li>
          <li>Repayment starts after completion of course</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Admission letter from institution</li>
          <li>Fee structure of course</li>
          <li>Identity proof (Aadhar, PAN, Passport)</li>
          <li>Address proof (Utility bill, Rent agreement)</li>
          <li>Income proof of co-applicant (Salary slips/IT returns)</li>
          <li>Academic records (marksheets, certificates)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Loan disbursed directly to institution</li>
          <li>Collateral may be required for higher loan amounts</li>
          <li>Interest subsidy available under government schemes</li>
          <li>Prepayment allowed with minimal charges</li>
          <li>Default in repayment may affect credit score</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Easy access to quality education <br />
          ✅ Flexible repayment options <br />
          ✅ Moratorium during study period <br />
          ✅ Tax benefits under Section 80E
        </p>
        <br/>
        <br/>
        <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
      </section>
    </div>
  );
}
