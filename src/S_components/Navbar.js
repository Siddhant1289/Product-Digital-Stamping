import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav>
          <label className="logo">Shopkeeper</label>
          <ul>
            <li>
              <a className="active" href="/products_list">
                Products List
              </a>
            </li>
            <li>
              <a className="active" href="/generate_new_qr">
                Generate New QR
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
