import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Wallets from "./Wallets";
import Markets from "./Markets";
import Liquidity from "./Liquidity";
import LiquidityCard from "./LiquidityCard";
import Portfolio from "./Portfolio";
import Investment from "./Investment";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallets />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/liquidity" element={<Liquidity />} >
        <Route index element={<LiquidityCard />} />
        <Route path="LiquidityCard" element={<Investment />} />
        <Route path="investment" element={<Investment />} />
      </Route>
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default Pages;
