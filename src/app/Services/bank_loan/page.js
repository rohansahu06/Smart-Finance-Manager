import React from 'react'
import'./bank_loan.css'
import Link from "next/link"
export default function page() {
  return (
    <div>
         <div>
        <h2 id='Heading'>Empowering your dreams with trusted loans</h2>
       <div className='loan-01'>
       <Link href="./bank_loan/Home_loan"><div id='loan-box01'></div></Link>
       <Link href="./bank_loan/Education_loan"><div id='loan-box02'></div></Link>
       <Link href="./bank_loan/Gold_loan"><div id='loan-box03'></div></Link>
        
     </div>
      <div className='loan-01'>
         <Link href="./bank_loan/Health_insur"><div id='loan-box04'></div></Link>
          <Link href="./bank_loan/Bussiness_loan"><div id='loan-box05'></div></Link>
           <Link href="./bank_loan/Agri_loan"><div id='loan-box06'></div></Link>
      </div>
    </div>
       
      
    </div>
  )
}
