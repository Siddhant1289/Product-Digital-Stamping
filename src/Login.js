import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { card: "" };
  }
  openLogin = () => {};

  openRegister = () => {};
  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="card">
            <div className="inner-box" id="card">
              <div className="card-front">
                <h2>LOGIN</h2>
                <form>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter UserID"
                    required
                  />
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Password"
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </form>
                <button
                  type="button"
                  className="btn"
                  onClick={this.openRegister}
                >
                  I'm New Here
                </button>
                <a href="">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <div className="inner-box" id="card">
              <div className="card-back">
                <h2>REGISTER</h2>
                <form>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="text"
                    className="input-box"
                    placeholder="Enter UserID"
                    required
                  />
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Password"
                    required
                  />
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </form>
                <button type="button" className="btn" onClick={this.openLogin}>
                  I Have An Account
                </button>
                <a href="">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
