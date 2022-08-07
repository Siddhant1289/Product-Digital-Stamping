import React from "react";
import "./Navbar.css";
export const Add_Shopkeeper = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="inner-box">
          <div>
            <h2>
              <u>Add Shopkeeper</u>
            </h2>
            <form>
              <input
                type="text"
                className="input-box"
                placeholder="ID"
                required
              />
              <input
                type="text"
                className="input-box"
                placeholder="Shop Name"
                required
              />
              <input
                type="text"
                className="input-box"
                placeholder="Owner's Name"
                required
              />
              <input
                type="text"
                className="input-box"
                placeholder="Address"
                required
              />
              <input
                type="text"
                className="input-box"
                placeholder="Phone No."
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
