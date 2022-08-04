/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./M_components/Navbar";
import { Add_Shopkeeper } from "./M_components/Add_Shopkeeper";
import { Products } from "./M_components/Products";
import { Generate_QR } from "./M_components/Generate_QR";
class Manufacturer extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/add_shopkeeper" Component={<Add_Shopkeeper />} />
            <Route path="/products" Component={<Products />} />
            <Route path="/generate_qr" Component={<Generate_QR />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Manufacturer;
