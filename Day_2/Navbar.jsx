import React from 'react';
import { Link } from 'react-router-dom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import '../assets/CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <SelfImprovementIcon />
          <h1 className="navbar-brand">Yogic Sphere!</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/more" className="nav-link">More</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
