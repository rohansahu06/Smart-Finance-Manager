"use client"
import React from 'react'
import './Client.css'
import Link from "next/link"


export default function page() {
  return (
    <div>
        <h2 id='Heading'> Our Trusted customers, is our greatest assets </h2>

       <div className='cust_list-01'>

         <Link href="Client/Client01_detail"><div id="client1" ></div></Link>
         <Link href="Client/Client02_detail"><div id="client2"></div></Link>
          <Link href="Client/Client03_detail"><div id="client3"></div></Link>
          <Link href="Client/Client04_detail"><div id="client4"></div></Link>
    </div>
         <div className='cust_list-02'>

          <Link href="Client/Client05_detail"><div id="client5"></div></Link>
          <Link href="Client/Client06_detail"><div id="client6"></div></Link>
          <Link href="Client/Client07_detail"><div id="client7"></div></Link>
          <Link href="Client/Client08_detail"><div id="client8"></div></Link>
           
    </div>
           <div className='cust_list-03'>

            <Link href="Client/Client09_detail"><div id="client9"></div></Link>
            <Link href="Client/Client10_detail"><div id="client10"></div></Link>
            <Link href="Client/Client11_detail"><div id="client11"></div></Link>
            <Link href="Client/Client12_detail"><div id="client12"></div></Link>

    </div>
      
    </div>
  )
}
