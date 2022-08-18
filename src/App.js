/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./App_components/Login";
import Home from "./App_components/Home";
import { Navbar } from "./App_components/Navbar";
import Register from "./App_components/Register";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
