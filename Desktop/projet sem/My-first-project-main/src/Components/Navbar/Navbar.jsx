import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EV-olution</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;
