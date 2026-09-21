import React from 'react';
import'./Footer.css'
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-head-1'>
        <div id='box-1'>
          <Link href='./About'><h3>About Us</h3></Link>
          <p>Trusted banking partner providing secure deposits, loans, and financial solutions since 1990.</p>
        </div>
        <div id='box-2'>
          <h3>Services</h3>
          <ul>
            <li>Savings Accounts</li>
            <li>Fixed Deposits</li>
            <li>Loans & Credit</li>
            <li>Online Banking</li>
          </ul>
        </div>
        <div id='box-3'>
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Branch Locator</li>
          </ul>
        </div>
      </div>
      <div className='footer-head-2'>
        <div id='box-4'>
          <h3>Contact</h3>
          <p>📍 123 Finance Street, Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@mybank.com</p>
        </div>
        <div id='box-5'>
          <h3>Working Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 9:00 AM - 1:00 PM</p>
          <p>Sun: Closed</p>
        </div>
        <div id='box-6'>
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className='footer-head-3'>
        <div id='box-7'>
          <h3>Follow Us</h3>
         <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>
        </div>
        <div id='box-8'>
          <h3>Newsletter</h3>
          <p>Subscribe to get latest updates and offers.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div id='box-9'>
          <h3>Download App</h3>
          <p>Banking made easy on mobile.</p>
          <button>Google Play</button>
          <button>App Store</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MyBank. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
