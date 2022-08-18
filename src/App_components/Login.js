import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="card">
          <div className="card-front">
            <h2>
              <u>LOGIN</u>
            </h2>
            <form>
              <select className="select-box" placeholder="Select">
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
                required
              />
              <input
                type="password"
                name="password"
                id="password"
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
