import React, { Component } from "react";
import axios from "axios";
import Manufacturer from "./Manufacturer";
import Shopkeeper from "./Shopkeeper";

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
            <select
              name="module"
              className="select-box"
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
              onChange={this.handleChangeFields}
            />
            <input
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleChangeFields}
            />

            <input type="button" value="submit" onClick={this.handleLogin} />
          </div>
        )}
      </div>
    );
  }
}

export default Lk;
