import { NavLink } from "react-router-dom";
import { RiLayoutGridLine } from "@remixicon/react";
import { RiWalletLine } from "@remixicon/react";
import { RiBox3Line } from "@remixicon/react";
import { RiStockFill } from "@remixicon/react";
import { RiBriefcaseLine } from "@remixicon/react";

const NavMob = () => {
  return (
    <div>
      <ul className="nav-links-2">
        <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                <RiLayoutGridLine size={18} />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link ex"
                }
              >
                <RiWalletLine size={18} />
                <p>Wallet</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/markets"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                <RiStockFill size={18} />
                <p>Markets</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/liquidity"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link ex"
                }
              >
                <RiBox3Line size={18} />
                <p>Liquidity</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link ex"
                }
              >
                <RiBriefcaseLine size={18} />
                <p>Portfolio</p>
              </NavLink>
            </li>
      </ul>
    </div>
  );
};

export default NavMob;
