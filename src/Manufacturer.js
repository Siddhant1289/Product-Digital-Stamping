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
            <Route exact path="/add_shopkeeper" element={<Add_Shopkeeper />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/generate_qr" element={<Generate_QR />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Manufacturer;
