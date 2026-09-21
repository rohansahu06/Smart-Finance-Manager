"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbaar.css";

const Navbaar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");

    setIsLoggedIn(false);

    window.location.href = "/Login";
  };

  return (
    <div className="navbar">

      <div className="logo">
        <i className="fa-solid fa-building-columns"></i> PayZen</div>

      <div className="nav-links">

        <Link href="/Services">
          <button>
            <i className="fa-solid fa-file-contract"></i> Service
          </button>
        </Link>

        <Link href="/Client">
          <button>
            <i className="fa-solid fa-users"></i> Client
          </button>
        </Link>

        <Link href="/Feedback">
          <button>
            <i className="fa-solid fa-comments"></i> Feedback
          </button>
        </Link>

        <Link href="/About">
          <button>
            <i className="fa-solid fa-circle-info"></i> About
          </button>
        </Link>

        <Link href="/">
          <button>
            <i className="fa-solid fa-house"></i> Home
          </button>
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        ) : (
          <Link href="/Login">
            <button>
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </button>
          </Link>
        )}

      </div>

    </div>
  );
};

export default Navbaar;