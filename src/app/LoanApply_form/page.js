"use client"
import React from 'react'
import'./LoanApply.css'

export default function page() {
  return (
    
    <div className='cont-parent'>
   <div className="LoanApplyform">
  <h2 id='Heading'> Fill the Correct Info Carefully ..</h2>
  <div className="form-row">
    <label>Full Name : </label>
    <input type="text" placeholder="Enter your name" />
  </div>
  <div className="form-row">
    <label>FatherName: MotherName : </label>
    <input type="text" placeholder="Enter name Father" />
    <input type="text" placeholder="Enter Mother name" />
  </div>
   <div className="form-row">
    <label>Cust-DOB :  phoneNo : Education : </label>
    <input type="text" placeholder="Enter DOB" />
     <input type="number" placeholder="Enter No. " />
      <input type="text" placeholder="Heightest Education" />
  </div>
   <div className="form-row">
    <label>HouseNo : Pincode  :  Village = </label>
    <input type="number" placeholder="Enter your house No."/>
    <input type="number" placeholder="Enter your"/> 
    <input type="text" placeholder="Enter village Name"/>
  </div>
   <div className="form-row">
    <label>District: State: Coutry = </label> 
    <input type="text" placeholder="Enter district name " />
    <input type="text" placeholder="Enter State name " />
    <input type="text" placeholder="Enter Country name " />
  </div>
  <div className="form-row">
    <label>Occupation: Income/per/year :</label>
    <input type="text" placeholder="Enter your ccupation" />
     <input type="number" placeholder="Enter your Income" />
  </div>
  <div className="loandiscription">
    <label>Purpose Of Loan  : </label>
    <input type="text" placeholder="Enter your Discription" />
  </div>
  <button className='submit-button'>Submit Your Form</button>
</div>

</div>
  )
}
