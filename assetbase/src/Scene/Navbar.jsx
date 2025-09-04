import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../Images/Logo.svg";
import { RiLayoutGridLine } from "@remixicon/react";
import { RiWalletLine } from "@remixicon/react";
import { RiBox3Line } from "@remixicon/react";
import { RiStockFill } from "@remixicon/react";
import { RiBriefcaseLine } from "@remixicon/react";
import { RiAddFill } from "@remixicon/react";
import { RiNotification3Line } from "@remixicon/react";
import { RiUser2Line } from "@remixicon/react";
import { RiSearch2Line } from "@remixicon/react";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };

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
          <div className="nav-links-1">
            <NavLink
              to="/"
              end
              // to="/dashboard"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              <RiLayoutGridLine size={18} />
              <p>Dashboard</p>
            </NavLink>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                isActive ? "active-link" : "link ex"
              }
            >
              <RiWalletLine size={18} />
              <p>Wallet</p>
            </NavLink>
            <NavLink
              to="/markets"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              <RiStockFill size={18} />
              <p>Markets</p>
            </NavLink>
            <NavLink
              to="/liquidity"
              className={({ isActive }) =>
                isActive ? "active-link" : "link ex"
              }
            >
              <RiBox3Line size={18} />
              <p>Liquidity</p>
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "active-link" : "link ex"
              }
            >
              <RiBriefcaseLine size={18} />
              <p>Portfolio</p>
            </NavLink>
          </div>
        </div>
        <div className="right">
          <Link className="nav-btn">
            <RiAddFill size={18} />
            <p>Connect</p>
          </Link>
          <div className="nav-icons">
            <Link className="icon">
              <RiNotification3Line size={18} />
            </Link>
            <Link className="icon">
              <RiUser2Line size={18} />
            </Link>
            <Link className="icon">
              <RiSearch2Line size={18} />
            </Link>
          </div>
        </div>
        <div className="hamburger" onclick={updateMenu}>
        <Hamburger size={25} toggled={isMenuClicked} toggle={setIsMenuClicked} />
        </div>
        {isMenuClicked &&
        <div className="menuClass">
          <Link className="nav-btn">
            <RiAddFill size={18} />
            <p>Connect</p>
          </Link>
          <div className="nav-icons">
            <Link className="icon">
              <RiNotification3Line size={18} />
            </Link>
            <Link className="icon">
              <RiUser2Line size={18} />
            </Link>
            <Link className="icon">
              <RiSearch2Line size={18} />
            </Link>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
