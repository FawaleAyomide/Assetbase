import React from "react";
import Navbar from "./Navbar";
import NavMob from "./NavMob";

const Liquidity = () => {
  return (
    <div>
      <Navbar />
      <div className="liquidity-container">Liquidity</div>
      <div className="navmob">
        <NavMob />
      </div>
    </div>
  );
};

export default Liquidity;
