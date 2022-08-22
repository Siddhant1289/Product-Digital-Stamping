import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";
const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    module: "",
    Userid: "",
    Password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const fun = (e) => {
    e.preventDefault();
    const sendData = {
      module: user.module,
      Userid: user.Userid,
      Password: user.Password,
    };
    console.log(sendData);
    axios
      .post("https://localhost/project/login.php", sendData)
      .then((result) => {
        if (result.data.Status === "200") {
          navigate("/");
        } else {
          alert("Invalid User");
        }
      });
  };
  return (
    <div className="container">
      <div className="left">
        <div className="card">
          <div className="card-front">
            <h2>
              <u>LOGIN</u>
            </h2>
            <form onSubmit={fun}>
              <select
                className="select-box"
                onChange={handleChange}
                value={user.module}
              >
                <option value="">Select</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Shopkeeper">Shopkeeper</option>
              </select>
              <input
                type="text"
                name="Userid"
                id="ID"
                onChange={handleChange}
                value={user.Userid}
                className="input-box"
                placeholder="Enter UserID"
                required
              />
              <input
                type="password"
                name="Password"
                id="password"
                onChange={handleChange}
                value={user.Password}
                className="input-box"
                placeholder="Password"
                required
              />

              <input className="submit-btn" type="submit" value="submit" />
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>

            <a href="">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
