import React, { Component } from "react";
import "./Login.css";
// import Manufacturer from "./Manufacturer";
import Shopkeeper from "./Shopkeeper";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      password: "",
      isLog: false,
    };
  }
  fun = (e) => {
    if (this.state.ID === "admin" && this.state.password === "admin") {
      this.setState({ isLog: true });
    } else {
      alert("Not Logged In");
    }
  };
  handleChangeFields = (e1) => {
    this.setState({
      ...this.state,
      [e1.target.name]: e1.target.value,
    });
    console.log(this.state, "formfield");
  };
  render() {
    return (
      <div>
        {this.state.isLog ? (
          <div className="container">
            {/* <Manufacturer /> */}
            <Shopkeeper />
          </div>
        ) : (
          <div className="container">
            <div className="left">
              <div className="card">
                <div className="inner-box" id="card">
                  <div className="card-front">
                    <h2>
                      <u>LOGIN</u>
                    </h2>
                    <form onSubmit={this.fun}>
                      <select className="select-box" placeholder="Select">
                        <option value="">Select</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Shopkeeper">Shopkeeper</option>
                      </select>
                      <input
                        type="text"
                        name="ID"
                        id="ID"
                        value={this.state.a}
                        onChange={this.handleChangeFields}
                        className="input-box"
                        placeholder="Enter UserID"
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.a}
                        onChange={this.handleChangeFields}
                        className="input-box"
                        placeholder="Password"
                        required
                      />

                      <input
                        className="submit-btn"
                        type="submit"
                        value="submit"
                      />
                      <input type="checkbox" />
                      <span>Remember Me</span>
                    </form>

                    {/* <a href="">Forgot Password?</a> */}
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
export default Login;
