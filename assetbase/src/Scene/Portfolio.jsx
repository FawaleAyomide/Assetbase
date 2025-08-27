import React from "react";
import Navbar from "./Navbar";
import NavMob from "./NavMob";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="portfolio">Portfolio</div>
      <div className="navmob">
        <NavMob />
      </div>
    </div>
  );
};

export default Portfolio;
