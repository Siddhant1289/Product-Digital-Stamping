import React from "react";
import "./Navbar.css";
export const Generate_New_QR = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="card">
          <div className="inner-box">
            <div>
              <h2>
                <u>Generate New QR</u>
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
                <label className="lb">Purchase Date</label>
                <input type="date" className="input-box" required />
                <label className="lb">Warranty Till</label>
                <input type="date" className="input-box" required />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
