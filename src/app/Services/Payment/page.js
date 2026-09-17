import Link from "next/link"
import React from 'react'
import "./payment.css";
export default function page() {
  return (
      <div>
      <h2 id='Heading'>Your money, your way — anytime, anywhere</h2>
     <div className='payment-01'>
       <Link href="Payment/Bank_transfer"><div id="pay-box01"></div></Link>
       <Link href="Payment/Card_based"><div id="pay-box02"></div></Link>
       <Link href="Payment/Digital_payment"><div id="pay-box03"></div></Link>
        
     </div>
    </div>
    
  )
}
