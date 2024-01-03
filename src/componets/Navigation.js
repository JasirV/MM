import { FaRegUser } from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import './Navigation.css'

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }
  return (
    <div>
  <nav className="nav" style={{ display: "flex", justifyContent: "space-between" }}>
    <div className="logo mx-5">Your Logo</div>
  
    <div className="menu-icon mx-3" onClick={toggleDropdown}>
      <FaBars className="m-3 mt-3" />
      {isDropdownOpen?(<div className="mt-3" >
      <p style={{ color: "black", fontWeight: "600" }} className="m-2" to="/">Home</p>
      <p style={{ color: "black", fontWeight: "600" }} className="m-2">Contact</p>
      <p style={{ color: "black", fontWeight: "600" }} className="m-2">Services</p>
    </div>):""}
    </div>
    
    <div className="nav-links mt-3">
      <Link style={{ color: "black", fontWeight: "600" }} className="m-2" to="/">Home</Link>
      <Link style={{ color: "black", fontWeight: "600" }} className="m-2">Contact</Link>
      <Link style={{ color: "black", fontWeight: "600" }} className="m-2">Services</Link>
    </div>
    
    <div className="mx-3">
      <FaRegUser className=" menu-iconslo m-3 mt-3" />
    </div>
  </nav>
</div>
  )
}

export default Navigation