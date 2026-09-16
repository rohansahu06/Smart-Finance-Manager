import React from 'react';
import './Healthinsur.css';
import Link from "next/link"
export default function HealthInsurancePage() {
  return (
    <div className="health-insurance-page">
      <h1>🩺 Secure Your Health with Trusted Insurance</h1>
      <p className="intro">
        Our Health Insurance plans provide financial protection against medical
        emergencies, hospitalization, and critical illnesses, ensuring peace of mind
        for you and your family.
      </p>

      <section className="section">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>Age: 18 – 65 years (children covered from 90 days)</li>
          <li>Indian residents and NRIs eligible</li>
          <li>Medical check-up may be required above 45 years</li>
          <li>Family floater option available</li>
        </ul>
      </section>

      <section className="section">
        <h2>Coverage Features</h2>
        <ul>
          <li>Hospitalization expenses (room, doctor, surgery)</li>
          <li>Pre & post hospitalization (30–60 days)</li>
          <li>Daycare procedures</li>
          <li>Ambulance charges</li>
          <li>Critical illness cover</li>
          <li>Cashless treatment at network hospitals</li>
        </ul>
      </section>

      <section className="section">
        <h2>Documents Required</h2>
        <ul>
          <li>Identity proof (Aadhar, PAN, Passport)</li>
          <li>Address proof (Utility bill, Rent agreement)</li>
          <li>Age proof (Birth certificate, School certificate)</li>
          <li>Income proof (optional for tax benefit plans)</li>
          <li>Medical reports (if required)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Waiting period of 30 days for new policies</li>
          <li>Pre-existing diseases covered after 2–4 years</li>
          <li>No claim bonus for claim-free years</li>
          <li>Tax benefits under Section 80D</li>
          <li>Policy renewal up to lifetime</li>
        </ul>
      </section>

      <section className="section highlight-box">
        <h2>Customer Benefits</h2>
        <p>
          ✅ Cashless hospitalization <br />
          ✅ Wide network of hospitals <br />
          ✅ Affordable premium options <br />
          ✅ Tax savings under Section 80D
        </p>
        <br/>
        <br/>
       <Link href="/LoanApply_form"><button id="loan_request">Apply for Loan..!</button></Link>
      </section>
    </div>
  );
}
