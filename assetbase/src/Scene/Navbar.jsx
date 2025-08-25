import { NavLink, Link } from "react-router-dom";
import logo from "../Images/Logo.svg";
import dashboard from "../Images/Dashboard.svg";
import wallet from "../Images/Wallet.svg";
import markets from "../Images/Markets.svg";
import liquidity from "../Images/Liquidity.svg";
import portfolio from "../Images/Portfolio.svg";
import plus from "../Images/Plus.svg";
import alarm from "../Images/Alarm.svg";
import profile from "../Images/Profile.svg";
import search from "../Images/Search.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="left">
        <ul className="nav">
          <li>
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="App Logo" width="172.45" height="22.89" />
            </NavLink>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <NavLink to="/about" className="link">
              <img src={dashboard} alt="dashboard" width="20" height="20" />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link ex">
              <img src={wallet} alt="wallet" width="20" height="20" />
              <p>Wallet</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link disabled">
              <img src={markets} alt="markets" width="20" height="20" />
              <p>Markets</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link ex">
              <img src={liquidity} alt="Liquidity" width="20" height="20" />
              <p>Liquidity</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link ex">
              <img src={portfolio} alt="App Logo" width="20" height="20" />
              <p>Portfolio</p>
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="right">
          <Link className="nav-btn">
              <img src={plus} alt="connect" width="18" height="18" />
              <p>Connect</p>
          </Link>
          <div className="nav-icons">
          <Link className="icon">
              <img src={alarm} alt="notification" width="20" height="20" />
          </Link>
          <Link className="icon">
              <img src={profile} alt="profile" width="20" height="20" />
          </Link>
          <Link className="icon">
              <img src={search} alt="search" width="20" height="20" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
