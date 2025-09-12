import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  RiUser2Line,
  RiTaskLine,
  RiShieldUserLine,
  RiBookletLine,
  RiAwardLine,
  RiPhoneLine,
  RiDeleteBinLine,
  RiLogoutBoxLine,
  RiGroupLine,
  RiListOrdered2,
} from "@remixicon/react";

const Account = () => {
  const sidebarData = [
    {
      id: 1,
      to: "",
      end: true,
      icon: <RiUser2Line size={15} />,
      title: "Profile",
    },
    {
      id: 2,
      to: "leaderboard",
      icon: <RiListOrdered2 size={15} />,
      title: "Leaderboard",
    },
    {
      id: 3,
      to: "kyc",
      icon: <RiTaskLine size={15} />,
      title: "KYC",
    },
    {
      id: 4,
      to: "security",
      icon: <RiShieldUserLine size={15} />,
      title: "Security",
    },
    {
      id: 5,
      to: "referrals",
      icon: <RiGroupLine size={15} />,
      title: "Referrals",
    },
    {
      id: 6,
      to: "accountstatement",
      icon: <RiBookletLine size={15} />,
      title: "Account Statement",
    },
    {
      id: 7,
      to: "investmentcertificate",
      icon: <RiAwardLine size={15} />,
      title: "Investment Certificate",
    },
    {
      id: 8,
      to: "contactus",
      icon: <RiPhoneLine size={15} />,
      title: "Contact Us",
    },
    {
      id: 9,
      to: "deletemyaccount",
      icon: <RiDeleteBinLine size={15} />,
      title: "Delete My Account",
    },
    {
      id: 10,
      to: "logout",
      icon: <RiLogoutBoxLine size={15} />,
      title: "Log Out",
      color: "var(--ticker-red)",
    },
  ];
  return (
    <div className="Account">
      <header>
        <p>Account</p>
      </header>
        <div className="sidebar-wrapper">
          <div className="sidebar">
            {sidebarData.map((sidebar) => (
              <NavLink
                to={sidebar.to}
                end={sidebar.end || false}
                style={{ color: sidebar.color }}
                className="sidebar-link"
                key={sidebar.id}
              >
                <div className="sidebar-icon">
                {sidebar.icon}
                </div>
                <p>{sidebar.title}</p>
              </NavLink>
            ))}
          </div>
          <div className="sidebar-content">
          <Outlet />
          </div>
        </div>
    </div>
  );
};

export default Account;
