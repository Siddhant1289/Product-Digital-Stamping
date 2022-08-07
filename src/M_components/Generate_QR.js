import React from "react";
import "./Navbar.css";

export const Generate_QR = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="inner-box">
          <div>
            <h2>
              <u>Generate QR</u>
            </h2>
            <form>
              <input
                type="text"
                className="input-box"
                placeholder="Product ID"
                required
              />
              <input
                type="text"
                className="input-box"
                placeholder="Shopkeeper ID"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
