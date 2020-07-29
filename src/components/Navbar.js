import React from "react";
import logo from "../assets/logo.png";
import brand from "../assets/brand.png";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <img className="brand" src={brand} alt="brand" />
      </div>
      <ul className="links">
        <li>
          <a href="/">Why Vyorius?</a>
        </li>
        <li>
          <a href="/">Solutions</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Use Cases</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Partners</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
      </ul>
      <div className="btn-container">
        <button className="btn btn-primary">Launch Vyorius &gt;</button>
      </div>
    </nav>
  );
}

export default Navbar;
