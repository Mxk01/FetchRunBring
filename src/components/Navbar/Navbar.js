import React from 'react'
import './Navbar.css';
import {
  
    Link
  } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav className="nav__container">  
            <li><Link style={{textDecoration:'none',color:'black'}} to="/">  Home </Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}} to="/contact"> Contact Us </Link></li>
            {/* <li><Link style={{textDecoration:'none',color:'black'}} to="/adopt">Adopt </Link></li> */}
            </nav>
        </div>
    )
}

export default Navbar
