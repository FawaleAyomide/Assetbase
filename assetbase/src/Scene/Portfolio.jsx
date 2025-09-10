import flag from "../Images/Flag.svg";
import { NavLink, Outlet } from "react-router-dom";
import arrowDownLight from "../Images/Arrow-down-light.svg";
import linebarchartbig from "../Images/Linebarchartbig.svg";
import linebarchartsmall from "../Images/Linebarchartsmall.svg";
import piechart from "../Images/Piechart.svg";

const Portfolio = () => {

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-container">
          <div className="header">
            <p>Portfolio</p>
          </div>
          <div className="portfolio-wrapper">
            <div className="portfolio-top">
              <div className="pt-wrapper-left">
                <div className="pt pt-1">
                  <div className="pt-1-l">
                    <p>Total Assets</p>
                    <h3>$450,000,000.45</h3>
                    <div className="pt-1-b">
                      <p className="profit">+1.25%</p>
                      <p>+34,000 this week</p>
                    </div>
                  </div>
                  <div className="pt-1-r">
                    <div className="select-country">
                      <img src={flag} alt="country" width="20" height="20" />
                      <img
                        src={arrowDownLight}
                        alt="country"
                        width="20"
                        height="20"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-wrapper">
                  <div className="pt pt-2">
                    <div className="pt-card pt-2-l">
                      <p>Holdings</p>
                      <h3>$150,000.45</h3>
                      <p className="profit">+1.25% (24h)</p>
                    </div>
                    <div className="pt-card pt-2-r">
                      <p>All-Time Profit</p>
                      <h3>+ $50,000.45</h3>
                      <p className="profit">+100.25%</p>
                    </div>
                    <div className="pt-card pt-3-l">
                      <p>Avg. Buy Price</p>
                      <h3>$9,100.45</h3>
                    </div>
                    <div className="pt-card pt-3-r">
                      <p>Cost Basis</p>
                      <h3>$50,000.45</h3>
                    </div>
                  </div>
                  <div className="pt pt-3">
                  </div>
                </div>
              </div>
              <div className="pt-wrapper-middle">
                <p>Statistics</p>
                <div className="linebarchart-wrapper">
                <img src={linebarchartbig} alt="linebarchart" height="218" className="linebarchartbig" />
                <img src={linebarchartsmall} alt="linebarchart" width="467" height="99" className="linebarchartsmall" />
                </div>
              </div>
              <div className="pt-wrapper-right">
                <p>Distribution</p>
                <img src={piechart} alt="piechart" width="127.23" height="127.23" className="piechart"/>
                <div className="pt-assets-wrapper">
                  <div className="pt-assets">
                  <p>Total Assets</p>
                  <h5>$450,000.45</h5>
                  </div>
                  <div className="pt-assets">
                  <p>Total Assets</p>
                  <h5>$450,000.45</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-bottom">
              <div className="grid">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive ? "active-liq" : "inactive-liq"
                }
              >
                <p className="liq-card">My Assets</p>
              </NavLink>
              <NavLink
              to="watchlist"
              className={({ isActive }) =>
                isActive ? "active-liq" : "inactive-liq"
            }
              >
                <p className="liq-card">Watchlist</p>
              </NavLink>
              <NavLink
              to="matured"
              className={({ isActive }) =>
                isActive ? "active-liq" : "inactive-liq"
            }
              >
                <p className="liq-card">Matured</p>
              </NavLink>
          </div>
          <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
