import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Register = (props) => {
  let history = useNavigate();
  const [data, setData] = useState({
    module: "",
    Userid: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const fun = (e) => {
    e.preventDefault();
    const sendData = {
      module: data.module,
      Userid: data.Userid,
      Email: data.Email,
      Password: data.Password,
    };
    console.log(sendData);
    axios
      .post("https://localhost/project/login_data_insert.php", sendData)
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        } else {
          history("/login");
        }
      });
  };
  return (
    <div className="container">
      <div className="left">
        <div className="card">
          <div className="card-front">
            <h2>
              <u>REGISTER</u>
            </h2>
            <form onSubmit={fun}>
              <select
                className="select-box"
                placeholder="Select"
                name="module"
                onChange={handleChange}
                value={data.module}
              >
                <option value="">Select</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Shopkeeper">Shopkeeper</option>
              </select>
              <input
                type="text"
                name="Userid"
                id="ID"
                className="input-box"
                placeholder="Enter UserID"
                onChange={handleChange}
                value={data.Userid}
                required
              />
              <input
                type="email"
                name="Email"
                id="email"
                className="input-box"
                placeholder="E-Mail"
                onChange={handleChange}
                value={data.Email}
                required
              />
              <input
                type="password"
                name="Password"
                id="password"
                className="input-box"
                placeholder="Password"
                onChange={handleChange}
                value={data.Password}
                required
              />

              <input className="submit-btn" type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
