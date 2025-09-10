
// import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import fire from "../Images/Fire.svg";
import landmark from "../Images/Landmark.svg";
import favicon from "../Images/Favicon.svg"

const Markets = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h,24h,7d"
      );
      const data = await res.json();
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  useEffect(() => {
    // Fetch on mount
    fetchData();

    // Set interval to refresh every 30 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-center-wrapper">
      <img src={favicon} alt="loading" width="24px" height="24px" className="text-center"/>
    </div>;
  }

  return (
    <>
      {/* <Outlet /> */}
      <div className="markets">
        <div className="header">
          <p>Markets</p>
        </div>
        <div className="markets-wrapper">
          <div className="ticker-wrapper">
            <div className="fire">
              <img src={fire} alt="hot" width="13.67" height="13.48" />
            </div>
            <div className="pairs">
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
              <p className="loss">
                ETH/BTC <span>-0.48%</span>
              </p>
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
              <p className="loss">
                SOL/USDT <span>-0.48%</span>
              </p>
              <p className="profit">
                DOGE/USDT <span>+0.48%</span>
              </p>
              <p className="profit">
                TRX/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
            </div>
            <div className="pairs">
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
              <p className="loss">
                ETH/BTC <span>-0.48%</span>
              </p>
              <p className="profit">
                BTC/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
              <p className="loss">
                SOL/USDT <span>-0.48%</span>
              </p>
              <p className="profit">
                DOGE/USDT <span>+0.48%</span>
              </p>
              <p className="profit">
                TRX/USDT <span>+0.48%</span>
              </p>
              <p className="loss">
                BTC/ETH <span>-0.48%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="markets-card-wrapper">
          <div className="markets-card">
            <div className="card">
              <div className="card-content trending">
                <div className="top">
                  <div className="text-wrapper">
                    <p className="title">Trending Assets</p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content trending">
                <div className="top">
                  <div className="text-wrapper">
                    <p className="title">Hottest Launchpad</p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card">
                    <div className="left-side">
                      <div className="left-side-text">
                        <img
                          src={landmark}
                          alt="landmark logo"
                          width="40"
                          height="40"
                        />
                        <div className="first">
                          <p className="name">LARL</p>
                          <p className="amount">$3,400</p>
                        </div>
                      </div>
                      <div className="right">
                        <p className="percent positive">+0.48%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-asset-wrapper">
            <div className="header">
              <p>All Assets</p>
            </div>
            <div className="table-wrapper large">
              <table border="0">
                <thead>
                  <tr className="tr">
                    <th className="border-left">#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th className="name">1hr %</th>
                    <th>24hr %</th>
                    <th>7d %</th>
                    <th>Market Cap</th>
                    <th className="border-right">Volume (24h)</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, index) => (
                    <tr key={coin.id}>
                      <td>{index + 1}</td>
                      {/* name */}
                      <td>
                        <div className="left-side-text">
                          <img
                            src={coin.image}
                            alt={coin.name}
                            width="40"
                            height="40"
                          />
                          <div className="first">
                            <p className="name">{coin.name}</p>
                            <p className="amount">
                              ({coin.symbol.toUpperCase()})
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* price */}
                      <td>${coin.current_price.toLocaleString()}</td>
                      {/* 1hr % */}
                      <td
                        className={`p-3 font-semibold ${
                          coin.price_change_percentage_1h_in_currency > 0
                            ? "profit"
                            : "loss"
                        }`}
                      >
                        {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                      </td>
                      {/* 24hr % */}
                      <td
                        className={`p-3 font-semibold ${
                          coin.price_change_percentage_24h > 0
                            ? "profit"
                            : "loss"
                        }`}
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      {/* 7d % */}
                      <td
                        className={`p-3 font-semibold ${
                          coin.price_change_percentage_7d_in_currency > 0
                            ? "profit"
                            : "loss"
                        }`}
                      >
                        {coin.price_change_percentage_7d_in_currency?.toFixed(
                          2
                        )}
                        %
                      </td>
                      {/* Market cap */}
                      <td>${coin.market_cap.toLocaleString()}</td>
                      {/* Volume (24h) */}
                      <td>
                        <div className="volume">
                          <p>${coin.total_volume.toLocaleString()}</p>
                          <p>557k</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-wrapper small">
              <table border="0">
                <thead>
                  <tr className="tr">
                    <th className="border-left">#</th>
                    <th className="name">Name</th>
                    <th className="border-right">24hr %</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, index) => (
                    <tr key={coin.id}>
                      <td>{index + 1}</td>
                      {/* name */}
                      <td>
                        <div className="left-side-text">
                          <img
                            src={coin.image}
                            alt={coin.name}
                            width="40"
                            height="40"
                          />
                          <div className="first">
                            <p className="name">{coin.name}</p>
                            <p className="amount">
                              ${coin.current_price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* 24hr % */}
                      <td
                        className={`p-3 font-semibold ${
                          coin.price_change_percentage_24h > 0
                            ? "profit"
                            : "loss"
                        }`}
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markets;
