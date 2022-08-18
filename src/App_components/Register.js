import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Register = (props) => {
  let history = useNavigate();
  const [data, setData] = useState({
    mod: "",
    ID: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const fun = (e) => {
    e.preventDefault();
    const sendData = {
      mod: data.mod,
      ID: data.ID,
      email: data.email,
      password: data.password,
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
                name="mod"
                onChange={handlechange}
                value={data.mod}
              >
                <option value="">Select</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Shopkeeper">Shopkeeper</option>
              </select>
              <input
                type="text"
                name="ID"
                id="ID"
                className="input-box"
                placeholder="Enter UserID"
                onChange={handlechange}
                value={data.ID}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="input-box"
                placeholder="E-Mail"
                onChange={handlechange}
                value={data.email}
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                className="input-box"
                placeholder="Password"
                onChange={handlechange}
                value={data.password}
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
