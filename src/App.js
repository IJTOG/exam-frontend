import React from "react";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div className="app">
      <img id="logo" alt="logo" src={logo} />
      <div className="container">
        <div className="text-center">
          <span className="title text-center">ชื่อของคุณ</span>
        </div>
        <div className="text-center">
          <input className="input" type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default App;
