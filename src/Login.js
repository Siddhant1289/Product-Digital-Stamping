import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="body">
        {/* ... */}
        {/* Here Is The Login Side */}
        <div className="login-container">
          <div className="header">LogIn</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label>UserID</label>
                <input
                  type="text"
                  name="UserID"
                  className="form-group"
                  placeholder="UserID"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-group"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                LogIn
              </button>
            </div>
          </div>
        </div>
        {/* ... */}
        {/* Here Is The Regster Side */}
        <div className="register-container">
          <div className="header">Register</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label>UserID</label>
                <input
                  type="text"
                  name="UserID"
                  className="form-group"
                  placeholder="UserID"
                />
              </div>
              <div className="form-group">
                <label>E-Mail</label>
                <input
                  type="email"
                  name="E-Mail"
                  className="form-group"
                  placeholder="E-Mail"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-group"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
