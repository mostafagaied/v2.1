import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            <li className='nav-contact' ><a className="btn btn-primary" href="https://facebook.com/">
    Home
  </a></li>
            <li className='nav-contact'><a className="btn btn-primary" href="https://facebook.com/">Explore</a></li>
            <li className='nav-contact'><a className="btn btn-primary" href="https://facebook.com/">About</a></li>
            <li className='nav-contact'><a className="btn btn-primary" href="https://facebook.com/">Contact</a></li>
        </ul>
        
    </div>
  )
}

export default Navbar