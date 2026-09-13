"use client"
import React from 'react'
import Link from "next/link"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbaar.css'

const Navbaar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-solid fa-building-columns"></i> MyBank
      </div>
      <div className="nav-links">
        <Link href="/Services"><button><i className="fa-solid fa-file-contract"></i>  Service</button></Link>
        <Link href="/Client"><button><i className="fa-solid fa-users"></i>Client</button></Link>
        <Link href="/Feedback"><button><i className="fa-solid fa-comments"></i> Feedback</button></Link>
        <Link href="/About"><button><i className="fa-solid fa-circle-info"></i> About</button>
        </Link><Link href="/"><button><i className="fa-solid fa-house"></i> Home</button></Link>
         <Link href="/Login"><button><i className="fa-solid fa-right-to-bracket"></i>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbaar
