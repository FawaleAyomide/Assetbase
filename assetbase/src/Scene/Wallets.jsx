import React from "react";
import Navbar from "./Navbar";
import NavMob from "./NavMob";

const Wallets = () => {
  return (
    <div>
      <Navbar />
      <div className="wallet">Wallets</div>
      <div className="navmob">
        <NavMob />
      </div>
    </div>
  );
};

export default Wallets;
