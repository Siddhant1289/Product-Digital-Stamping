/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./C_components/Navbar";
import { Product_Details } from "./C_components/Product_Details";
import { Warranty } from "./C_components/Warranty";
class Customer extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/warranty" element={<Warranty />} />
            <Route
              exact
              path="/product_details"
              element={<Product_Details />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Customer;
