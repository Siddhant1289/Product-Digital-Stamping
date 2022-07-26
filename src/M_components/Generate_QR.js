import axios from "axios";
import { Component } from "react";
import QRCode from "react-qr-code";

class Generate_QR extends Component {
  constructor(props) {
    super();
    this.state = {
      shopid: "",
      model: "",
      result: "",
      // test: "",
    };

    this.handleChangeFields = this.handleChangeFields.bind(this);
  }

  handleLogin = (e) => {
    const shopid = this.state.shopid;
    const model = this.state.model;

    const data = {
      shopid,
      model,
    };
    axios
      .get("http://localhost/project/generate_qr.php", { params: data })
      .then((kalu) => {
        console.log(kalu);
        console.log(kalu.data[0]);
        this.setState({
          result: JSON.stringify(kalu.data[0]),
        });

        console.log(this.state.result, "Kalu");
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
      <div className="container">
        <div className="main">
          <div className="card">
            <div className="inner-box">
              <div>
                <h2>
                  <u>Generate QR</u>
                </h2>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Product ID"
                  name="model"
                  id="model"
                  onChange={this.handleChangeFields}
                  required
                />
                <input
                  type="text"
                  className="input-box"
                  placeholder="Shopkeeper ID"
                  name="shopid"
                  id="shopid"
                  onChange={this.handleChangeFields}
                  required
                />
                <input
                  type="submit"
                  value="Generate"
                  className="submit-btn"
                  onClick={this.handleLogin}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <br></br>
        </div>
        <div className="main">
          <div className="card">
            <div className="inner-box">
              <div>
                <QRCode value={this.state.result} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Generate_QR;
