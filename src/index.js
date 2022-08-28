import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Lk from "./Lk";
import reportWebVitals from "./reportWebVitals";
// import Customer from "./Customer";
// import Manufacturer from "./Manufacturer";
// import Shopkeeper from "./Shopkeeper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Lk />
    {/* <Customer /> */}
    {/* <Manufacturer /> */}
    {/* <Shopkeeper /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
