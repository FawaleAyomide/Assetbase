import { NavLink } from "react-router-dom";
import dashboard from "../Images/Dashboard.svg";
import wallet from "../Images/Wallet.svg";
import markets from "../Images/Markets.svg";
import liquidity from "../Images/Liquidity.svg";
import portfolio from "../Images/Portfolio.svg";

const NavMob = () => {
  return (
    <div>
      <ul className="nav-links-2">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <img src={dashboard} alt="dashboard" width="20" height="20" />
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wallet"
            className={({ isActive }) => (isActive ? "active-link" : "link ex")}
          >
            <img src={wallet} alt="wallet" width="20" height="20" />
            <p>Wallet</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/markets"
            className={({ isActive }) =>
              isActive ? "active-link" : "link disabled"
            }
          >
            <img src={markets} alt="markets" width="20" height="20" />
            <p>Markets</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/liquidity"
            className={({ isActive }) => (isActive ? "active-link" : "link ex")}
          >
            <img src={liquidity} alt="Liquidity" width="20" height="20" />
            <p>Liquidity</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active-link" : "link ex")}
          >
            <img src={portfolio} alt="App Logo" width="20" height="20" />
            <p>Portfolio</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMob;
