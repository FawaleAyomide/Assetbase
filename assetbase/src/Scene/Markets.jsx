import React from "react";
import Navbar from "./Navbar";
import NavMob from "./NavMob";

const Markets = () => {
  return (
    <div>
      <Navbar />
      <div className="markets">Market</div>
      <div className="navmob">
        <NavMob />
      </div>
    </div>
  );
};

export default Markets;
