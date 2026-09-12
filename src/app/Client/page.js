"use client"
import React from 'react'
import './Client.css'
import Link from "next/link"

export default function page() {
  return (
    <div>
        <h2 id='heading'> Our Trusted customers, is our greatest assets </h2>

       <div className='cust_list-01'>

         <Link href="Client/Client01_detail"><div id="client1" ></div></Link>

            <div id='client2'></div>
              <div id='client3'></div>
               <div id='client4'></div>
       </div>
         <div className='cust_list-02'>
              <div id='client5'></div>
                <div id='client6'></div>
                  <div id='client7'></div>
                  <div id='client8'></div>
         </div>
           <div className='cust_list-03'>
              <div id='client9'></div>
                <div id='client10'></div>
                  <div id='client11'></div>
                  <div id='client12'></div>
           </div>
      
    </div>
  )
}
