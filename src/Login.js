import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
