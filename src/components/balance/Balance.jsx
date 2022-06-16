import React from "react";
import Logo from "../../images/logo.svg";
import "./balance.css";

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance-text">
        <span>My balance</span>
        <h2>$921.48</h2>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      </div>
    </div>
  );
};

export default Balance;
