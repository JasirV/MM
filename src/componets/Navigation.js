import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div> 
       <nav style={{display:"flex",justifyContent:"space-between"}}>
    <div className="logo mx-5">Your Logo</div>
    <div className="nav-links mt-3">
      <Link style={{color:"black", fontWeight:"600"}} className="m-2" to="/">Home</Link>
      <Link  style={{color:"black" , fontWeight:"600"}} className="m-2"  to="/contact">Contact</Link>
      <Link  style={{color:"black" , fontWeight:"600"}} className="m-2" to="/services">Services</Link>
    </div>
    <div className="mx-3">
    <FaRegUser className="m-3 mt-3" />
    </div>
  </nav>
</div>
  )
}

export default Navigation