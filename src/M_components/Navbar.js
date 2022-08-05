import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <label className="logo">Manufacturer</label>
          <ul>
            <li>
              <Link to="/add_shopkeeper">Add Shopkeeper</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/generate_qr">Generate QR</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
