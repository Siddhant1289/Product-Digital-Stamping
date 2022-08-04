import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <label className="logo">Manufacturer</label>
          <ul>
            <li>
              <a className="active" href="/add_shopkeeper">
                Add Shopkeeper
              </a>
            </li>
            <li>
              <a className="active" href="/products">
                Products
              </a>
            </li>
            <li>
              <a className="active" href="/generate_qr">
                Generate QR
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
