import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/3x3" className="nav-links">
                3x3
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/4x4" className="nav-links">
                4x4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;