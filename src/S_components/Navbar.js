import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <label className="logo">Shopkeeper</label>
          <ul>
            <li>
              <Link to="/products_list">Product List</Link>
            </li>
            <li>
              <Link to="/generate_new_qr">Generate New QR</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
