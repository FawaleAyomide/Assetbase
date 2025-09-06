import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Wallets from "./Wallets";
import Markets from "./Markets";
import Liquidity from "./Liquidity";
import LiquidityCard from "./LiquidityCard";
import Portfolio from "./Portfolio";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallets />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/liquidity" element={<Liquidity />}>
          <Route index element={<LiquidityCard />} />
          <Route path="LiquidityCard" element={<Investment />} />
          <Route path="investment" element={<Investment />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} >
          <Route index element={<Myasset />} />
          <Route path="investment" element={<Myasset />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="matured" element={<Matured />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
