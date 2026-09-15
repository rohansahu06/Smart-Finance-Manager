import React from 'react'
import'./feedback.css'

export default function page() {
  return (
<div className="feedback">
  <h2 id='Heading'>Customer Feedback form ..</h2>
  <div className="form-row">
    <label>Full Name:</label>
    <input type="text" placeholder="Enter your name" />
  </div>
  <div className="form-row">
    <label>Phone Number:</label>
    <input type="number" placeholder="Enter your valid number" />
  </div>
  <div className="form-row">
    <label>Email:</label>
    <input type="email" placeholder="Enter valid email" />
  </div>
  <div className="form-row">
    <label>Branch Location:</label>
    <input type="text" placeholder="Enter your branch location" />
  </div>
  <div className="form-row feedback-row">
    <label>Feedback:</label>
    <textarea placeholder="Write your feedback here..."></textarea>
  </div>
  <button type="submit">Submit Feedback</button>
</div>


  )
}
