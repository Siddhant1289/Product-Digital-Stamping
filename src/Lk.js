import React, { Component } from "react";
import axios from "axios";
import Manufacturer from "./Manufacturer";
import Shopkeeper from "./Shopkeeper";
import "./App_components/Login.css";

class Lk extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      module: "",
      msg: "aaaa",
      isLoggedIn: false,
    };
    this.handleChangeFields = this.handleChangeFields.bind(this);
  }

  handleLogin = () => {
    const Userid = this.state.email;
    const Password = this.state.password;
    const module = this.state.module;

    const data = {
      Userid,
      Password,
      module,
    };
    axios
      .get("http://localhost/project/login.php", { params: data })
      .then((kalu) => {
        console.log(kalu);
        console.log(kalu.data[0].answer);

        if (kalu.data[0].answer === "valid") {
          this.setState({
            isLoggedIn: true,
          });
        } else {
          alert("not Valid");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleChangeFields = (e1) => {
    this.setState({
      ...this.state,
      [e1.target.name]: e1.target.value,
    });
    console.log(this.state, "formField");
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            {this.state.module === "Manufacturer" ? (
              <Manufacturer />
            ) : (
              <Shopkeeper />
            )}
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
                      <u>LOGIN</u>
                    </h2>
                    <div>
                      <select
                        name="module"
                        className="input-box"
                        onChange={this.handleChangeFields}
                      >
                        <option value="">Select</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Shopkeeper">Shopkeeper</option>
                      </select>
                      <input
                        type="text"
                        id="email"
                        label="Email Address"
                        name="email"
                        className="input-box"
                        placeholder="Enter UserID"
                        onChange={this.handleChangeFields}
                      />
                      <input
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        className="input-box"
                        placeholder="Password"
                        onChange={this.handleChangeFields}
                      />

                      <input
                        type="button"
                        value="submit"
                        className="submit-btn"
                        onClick={this.handleLogin}
                      />
                    </div>
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

export default Lk;
