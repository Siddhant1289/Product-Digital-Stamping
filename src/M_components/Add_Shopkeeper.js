import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Navbar.css";
export const Add_Shopkeeper = () => {
  const [data, setData] = useState({
    shopid: "",
    shopname: "",
    ownername: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const fun = (e) => {
    e.preventDefault();
    const sendData = {
      shopid: data.shopid,
      shopname: data.shopname,
      ownername: data.ownername,
      address: data.address,
      phone: data.phone,
    };
    console.log(sendData);
    axios
      .post("http://localhost/project/add_shop_info.php", sendData)
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        } else {
          alert("Data Saved");
        }
      });
  };
  return (
    <div className="container">
      <div className="main">
        <div className="card">
          <div className="inner-box">
            <div>
              <h2>
                <u>Add Shopkeeper</u>
              </h2>
              <form onSubmit={fun}>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Shop Id"
                  name="shopid"
                  onChange={handleChange}
                  value={data.shopid}
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Shop Name"
                  name="shopname"
                  onChange={handleChange}
                  value={data.shopname}
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Owner's Name"
                  name="ownername"
                  onChange={handleChange}
                  value={data.ownername}
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  value={data.address}
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Phone No."
                  name="phone"
                  onChange={handleChange}
                  value={data.phone}
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
    </div>
  );
};
