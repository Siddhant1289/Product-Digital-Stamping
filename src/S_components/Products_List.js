import React, { useState, useEffect } from "react";
import "./Navbar.css";

export const Products_List = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/project/product.php")
      .then((result) => result.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
  }, []);
  return (
    <div className="container">
      <div className="main">
        <div className="card">
          <div className="inner-box">
            <div>
              <h2>
                <u>Products</u>
              </h2>
              <table>
                <tbody>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Model</th>
                    <th>Manufacturing</th>
                  </tr>

                  {item.map((item) => (
                    <tr key={item.id}>
                      {/* <td>{item.id}</td> */}
                      <td>{item.name}</td>
                      <td>{item.model}</td>
                      <td>{item.manudate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
