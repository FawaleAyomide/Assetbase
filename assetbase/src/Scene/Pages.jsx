import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Account from "../Components/Account";
import Dashboard from "./Dashboard";
import Wallets from "./Wallets";
import Markets from "./Markets";
import Liquidity from "./Liquidity";
import LiquidityCard from "./LiquidityCard";
import Portfolio from "./Portfolio";
import Profile from "../Components/AccountData/Profile"
import Leaderboard from "../Components/AccountData/Leaderboard"
import KYC from "../Components/AccountData/KYC"
import Security from "../Components/AccountData/Security"
import Referrals from "../Components/AccountData/Referrals"
import AccountStatement from "../Components/AccountData/AccountStatement"
import InvestmentCertificate from "../Components/AccountData/InvestmentCertificate"
import ContactUs from "../Components/AccountData/ContactUs"
import DMA from "../Components/AccountData/DMA"
import Logout from "../Components/AccountData/Logout"
import Investment from "./Investment";
import Myasset from "../Components/Myasset";
import Watchlist from "../Components/Watchlist";
import Matured from "../Components/Matured";
import CompanySpec from "./CompanySpec";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="/wallet" element={<Wallets />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/liquidity" element={<Liquidity />}>
          <Route index element={<LiquidityCard />} />
          <Route path="liquiditycard" element={<Investment />} />
          <Route path="investment" element={<Investment />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route index element={<Myasset />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="matured" element={<Matured />} />
        </Route>
        <Route path="/account" element={<Account />} >
          <Route index element={<Profile />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="kyc" element={<KYC />} />
          <Route path="security" element={<Security />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="accountstatement" element={<AccountStatement />} />
          <Route path="investmentcertificate" element={<InvestmentCertificate />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="deletemyaccount" element={<DMA />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
