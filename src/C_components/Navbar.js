import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <label className="logo">Customer</label>
          <ul>
            <li>
              <Link to="/warranty">Warranty</Link>
            </li>
            <li>
              <Link to="/product_details">Product Details</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
