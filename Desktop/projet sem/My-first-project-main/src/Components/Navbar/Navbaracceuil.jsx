import React from 'react'
import { Link } from 'react-router-dom';

export const Navbaracceuil = () => {
  return (
    <div> <nav className="">
    <div className="logo">EV-olution</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home1</Link>
      <Link to="/about" className="nav-link">About1</Link>
      <Link to="/contact" className="nav-link">Contact1</Link>
    </div>
  </nav>
  </div>
  )
}
export default Navbaracceuil;