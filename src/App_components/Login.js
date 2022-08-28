import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
// import Manufacturer from "/.Manufacturer";
import Home from "./Home";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      // module: "",
      Userid: "",
      Password: "",
      isLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin = () => {
    // const module = this.state.module;
    const Userid = this.state.Userid;
    const Password = this.state.Password;

    const data = {
      module,
      Userid,
      Password,
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

  handleChange = (e1) => {
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
            <Home />
          </div>
        ) : (
          <div className="container">
            <div className="left">
              <div className="card">
                <div className="card-front">
                  <h2>
                    <u>LOGIN</u>
                  </h2>
                  <form>
                    {/* <select
                      name="module"
                      className="select-box"
                      onChange={this.handleChange}
                      value={this.state.module}
                    >
                      <option value="">Select</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Shopkeeper">Shopkeeper</option>
                    </select> */}
                    <input
                      type="text"
                      name="Userid"
                      id="Userid"
                      onChange={this.handleChange}
                      value={this.state.Userid}
                      className="input-box"
                      placeholder="Enter UserID"
                      required
                    />
                    <input
                      type="password"
                      name="Password"
                      id="Password"
                      onChange={this.handleChange}
                      value={this.state.Password}
                      className="input-box"
                      placeholder="Password"
                      required
                    />

                    <input
                      className="submit-btn"
                      type="submit"
                      onClick={this.sendData}
                      value="submit"
                    />
                    {/* <input type="checkbox" /> */}
                    {/* <span>Remember Me</span> */}
                  </form>

                  <a href="">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Login;
