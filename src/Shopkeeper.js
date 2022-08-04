/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Generate_New_QR } from "./S_components/Generate_New_QR";
import { Navbar } from "./S_components/Navbar";
import { Products_List } from "./S_components/Products_List";
class Shopkeeper extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products_list" Component={<Products_List />} />
            <Route path="/generate_new_qr" Component={<Generate_New_QR />} />
            {/* <Route path="/generate_qr" Component={<Generate_QR />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Shopkeeper;
