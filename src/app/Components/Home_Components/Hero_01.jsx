"use client"
import React from 'react'
import './Hero_01.css'
import Link from "next/link"
const Hero_01 = () => {
  return (
    <div>
         <main className="hero-page">
            <section className="front-hero">
                <div className="front-hero-content">
                    <span className="hero-badge">PAYZEN BANK</span>
                    <h1>Grow Your Wealth <span>With Confidence</span></h1>
                    <p>Explore investment solutions designed for different financial goals, investment horizons and risk preferences.</p>
                    <div className="hero-buttons">
                       <Link href='/Services/Investment'><button className="primary-btn">Explore Investments</button></Link>
                        <button className="secondary-btn">Talk to an Advisor</button>
                    </div>
                </div>
            </section>
            /</main>
        <div className='service_01'>
         <Link href="/Services/With_deposite"><div id="ser-box1"></div></Link>
         <Link href="/Services/With_deposite"><div id="ser-box2"></div></Link>
         <Link href="/Services/bank_loan/Health_insur"><div id="ser-box3"></div></Link>      
         </div>
         <diV className='service_02'>
          <Link href="/Services"><div id="ser-box4"></div></Link>
          <Link href="/Services/Investment"><div id="ser-box5"></div></Link>
           
         </diV>   
    </div>
  )
}

export default Hero_01
