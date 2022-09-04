/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate_New_QR from "./S_components/Generate_New_QR";
import { Navbar } from "./S_components/Navbar";
import { Products_List } from "./S_components/Products_List";
class Shopkeeper extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/products_list" element={<Products_List />} />
            <Route
              exact
              path="/generate_new_qr"
              element={<Generate_New_QR />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Shopkeeper;
