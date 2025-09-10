import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import GradientLine from "../Images/Gradient Lines.svg";
import LogoBg from "../Images/LogoBg.svg";
import { RiBox3Line } from "@remixicon/react";
import CompanySpec from "./CompanySpec";

const Liquidity = () => {
  const [showOverlay, setShowOverlay] = useState(false);


  return (
    <>
      <div className="liquidity-container">
        <div className="header">
          <p>Liquidity</p>
        </div>
        <div className="liquidity-top-card">
          <div className="t-1">
            <h3>Amplify Your Returns Through Smart Liquidity</h3>
            <p>
              Join our exclusive liquidity pool and earn competitive returns
              while we strategically deploy your capital across high-potential
              investment opportunities. Professional fund management meets
              accessible investing.
            </p>
          </div>
            <img src={GradientLine} alt="gradient-line" className="gradient-line" height="210" width="550" />
            <img src={LogoBg} alt="large-logo" className="logo-bg" height="170" width="170.26" />
            <div className="liquidity-btn" onClick={() => setShowOverlay(true)}>
            <RiBox3Line size={18} />
            <p>Add Liquidity</p>
            </div>
        </div>
        {/* overlay */}

        {/* <div className="add-liquidity">
          <div className="add-liq-top">
            <h6>Add Liquidity</h6>
            <p>Invest in high-yield pools and company funding rounds</p>
          </div>
        </div> */}
        {/* overlay ends */}

        <div className="liquidity-wrapper">
          <div className="grid">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive ? "active-liq" : "inactive-liq"
                }
              >
                <p className="liq-card">Available (1000)</p>
              </NavLink>
              <NavLink
              to="investment"
              className={({ isActive }) =>
                isActive ? "active-liq" : "inactive-liq"
            }
              >
                <p className="liq-card">My Investment (20)</p>
              </NavLink>
          </div>
            <Outlet />
        </div>
      </div>
      <div className="navmob">
      </div>
    </>
  );
};

export default Liquidity;
