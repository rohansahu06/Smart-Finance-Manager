import React from 'react'
import './Navbaar.css'

const Navbaar = () => {
  return (
<div class="navbar">
  <div class="logo"><i class="fa-solid fa-building-columns"></i> MyBank</div>
  <div class="nav-links">
    <button><i class="fa-solid fa-circle-info"></i> About</button>
    <button><i class="fa-solid fa-briefcase"></i> Services</button>
    <button><i class="fa-solid fa-user-group"></i> Client</button>
    <button><i class="fa-solid fa-sitemap"></i> Subsidiaries</button>
    <button><i class="fa-solid fa-city"></i> Corporate</button>
    <button><i class="fa-solid fa-comments"></i> Feedback</button>
  </div>
</div>
  )
}

export default Navbaar
