import axios from "axios";
import { Component } from "react";
import QRCode from "react-qr-code";

class Generate_New_QR extends Component {
  constructor(props) {
    super();
    this.state = {
      shopid: "",
      model: "",
      pdate: "",
      wdate: "",
      result: "",
      test: "",
    };
    this.handleChangeFields = this.handleChangeFields.bind(this);
  }
  handleChangeFields = (e1) => {
    this.setState({
      ...this.state,
      [e1.target.name]: e1.target.value,
    });
    console.log(this.state, "formField");
  };
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
          result: kalu.data[0],
        });
        this.setState({
          test: JSON.stringify([
            this.state.result,
            this.state.wdate,
            this.state.pdate,
          ]),
        });
        console.log(this.state.test, "Lalu");
        console.log(this.state.result, "Kalu");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="card">
            <div className="inner-box">
              <div>
                <h2>
                  <u>Generate New QR</u>
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
                <label className="lb">Purchase Date</label>
                <input
                  type="date"
                  className="input-box"
                  name="pdate"
                  id="pdate"
                  onChange={this.handleChangeFields}
                  required
                />
                <label className="lb">Warranty Till</label>
                <input
                  type="date"
                  className="input-box"
                  name="wdate"
                  id="wdate"
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
                <QRCode value={this.state.test} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Generate_New_QR;
