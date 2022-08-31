import React, { Component } from "react";
import axios from "axios";
// import { useState } from "react";
import "./Login.css";
import "./Navbar.css";
import Lk from "../Lk";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      module: "",
      Userid: "",
      Email: "",
      Password: "",
      sign: false,
    };
  }

  handleClick = () => {
    // this.setState({ ...this.state, sign: true });
    this.setState({ sign: true });
    console.log(this.state.sign);
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(this.state);
  };

  fun = (e) => {
    e.preventDefault();
    const module = this.state.module;
    const Userid = this.state.Userid;
    const Email = this.state.Email;
    const Password = this.state.Password;

    const sendData = {
      module,
      Userid,
      Email,
      Password,
    };
    console.log(sendData);
    axios
      .post("http://localhost/project/login_data_insert.php", sendData)
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        } else {
          alert("Registered");
        }
      });
  };
  render() {
    return (
      <div>
        {this.state.sign ? (
          <div>
            <Lk />
          </div>
        ) : (
          <div>
            <div>
              <div className="nav">
                <label className="logo">Product Digital Stamping</label>
              </div>
            </div>
            <div className="container">
              <div className="left">
                <div className="card">
                  <div className="card-front">
                    <h2>
                      <u>REGISTER</u>
                    </h2>
                    <form onSubmit={this.fun}>
                      <select
                        className="select-box"
                        placeholder="Select"
                        name="module"
                        onChange={this.handleChange}
                        value={this.module}
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
                        onChange={this.handleChange}
                        value={this.Userid}
                        required
                      />
                      <input
                        type="email"
                        name="Email"
                        id="email"
                        className="input-box"
                        placeholder="E-Mail"
                        onChange={this.handleChange}
                        value={this.Email}
                        required
                      />
                      <input
                        type="password"
                        name="Password"
                        id="password"
                        className="input-box"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.Password}
                        required
                      />

                      <input
                        className="submit-btn"
                        type="submit"
                        value="submit"
                      />
                    </form>
                    <button className="signin" onClick={this.handleClick}>
                      SignIn?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Register;
