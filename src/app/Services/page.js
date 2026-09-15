"use client"
import React from 'react'
import'./services.css'
import Link from "next/link"


export default function Services() {
  return (
    <div>
      <h2 id='Heading'>Building prosperity through trusted financial Services</h2>
     <div className='service-01'>
       <Link href="./Services/deposite"><div id='serv-box01'></div></Link>
       <Link href="./Services/bank_loan"><div id='serv-box02'></div></Link>
       <Link href="./Services/Payment"><div id='serv-box03'></div></Link>
        
     </div>
      <div className='service-02'>
         <Link href="./Services/Investment"><div id='serv-box04'></div></Link>
          <Link href="./Services/foreign_exchange"><div id='serv-box05'></div></Link>
           <Link href="./Services/Special-service"><div id='serv-box06'></div></Link>
      </div>
    </div>
  )
}