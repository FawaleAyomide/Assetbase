import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseFill } from "@remixicon/react";
import Landmark from "../Images/Landmark.svg";
import tajm from "../Images/TAJM.svg";
import arrowDownLight from "../Images/Arrow-down-light.svg";
import chartMini from "../Images/Chartmini.svg";
import flag from "../Images/Flag.svg";
import clock from "../Images/Clock.svg";
import arrowup from "../Images/Arrowup.svg";
import arrowdown from "../Images/Arrowdown.svg";

function AssetsTab() {
  const [isOverlay, setIsOverlay] = useState(false);

  const tableDetails = [
    {
      id: 1,
      image: Landmark,
      name: "LARL",
      fullName: "Landmark Realty Limited",
      holdingsValue: "$2,361,867.34",
      holdingsVolume: "557k",
      price: "$100.34",
      change24hr: "+0.67%",
      allTime: "+100.67%",
      dividends: "+$2,361.34",
    },
    {
      id: 2,
      image: tajm,
      name: "TAJM",
      fullName: "TajBank Mudarabah Sukuk",
      holdingsValue: "$867,100.34",
      holdingsVolume: "557k",
      price: "$999.99",
      change24hr: "-9.99%",
      allTime: "+20.67%",
      dividends: "+$3,453.99",
    },
    {
      id: 3,
      image: Landmark,
      name: "GTCO",
      fullName: "Guaranty Trust Bank",
      holdingsValue: "$67,100.34",
      holdingsVolume: "557k",
      price: "$29.99",
      change24hr: "+0.67%",
      allTime: "+6.67%",
      dividends: "$52,329.99",
    },
    {
      id: 4,
      image: Landmark,
      name: "LARL",
      fullName: "Landmark Realty Limited",
      holdingsValue: "$7,100.34",
      holdingsVolume: "557k",
      price: "$1,999.99",
      change24hr: "+0.67%",
      allTime: "+3.67%",
      dividends: "$13,999,344.99",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isOverlay ? "hidden" : "auto";
  }, [isOverlay]);

  return (
    <div>
      <div className="table-wrapper large">
        <table border="0">
          <thead>
            <tr className="tr">
              <th className="border-left">#</th>
              <th>Name</th>
              <th>Holdings</th>
              <th className="name">Price</th>
              <th>Change (24hr)</th>
              <th>All time</th>
              <th>dividends</th>
              <th>Action</th>
              <th className="border-right"></th>
            </tr>
          </thead>
          <tbody>
            {tableDetails.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {/* name */}
                <td>
                  <div className="left-side-text">
                    <img
                      src={item.image}
                      alt="larl logo"
                      width="40"
                      height="40"
                    />
                    <div className="first">
                      <p className="name">{item.name}</p>
                      <p className="amount">{item.fullName}</p>
                    </div>
                  </div>
                </td>
                {/* Holdings */}
                <td>
                  <div className="holdings volume">
                    <p>{item.holdingsValue}</p>
                    <p>{item.holdingsVolume}</p>
                  </div>
                </td>
                {/* Price */}
                <td>{item.price}</td>
                {/* Change (24hr) */}
                <td
                  className={
                    item.change24hr.startsWith("+") ? "profit" : "loss"
                  }
                >
                  {item.change24hr}
                </td>
                {/* All time */}
                <td
                  className={item.allTime.startsWith("+") ? "profit" : "loss"}
                >
                  {item.allTime}
                </td>
                {/* dividends */}
                <td>{item.dividends}</td>
                {/* Action */}
                <td>
                  <button
                    className="view"
                    type="button"
                    onClick={() => setIsOverlay(true)}
                  >
                    view
                  </button>
                </td>
                {/* overlay */}
                <AnimatePresence>
                  {isOverlay && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="view-wrapper"
                    >
                      <div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="view-card-wrapper"
                      >
                        <div className="view-top-1">
                          <p>
                            Home / Portfolio /<span>{item.name}</span>
                          </p>
                          <div className="view-close">
                            <RiCloseFill
                              size={22.08}
                              onClick={() => setIsOverlay(false)}
                            />
                          </div>
                        </div>
                        <div className="view-top-2">
                          <div className="left-side-text">
                            <img
                              src={Landmark}
                              alt="larl logo"
                              width="60"
                              height="60"
                            />
                            <div className="first">
                              <p className="name">{item.name}</p>
                              <p className="amount">{item.fullName}</p>
                            </div>
                          </div>
                          <button className="view-trade">TRADE</button>
                        </div>
                        <div className="view-bottom">
                          <div className="view-bottom-left">
                            <div className="pt-wrapper-left">
                              <div className="pt pt-1">
                                <div className="pt-1-l">
                                  <p>Total Assets</p>
                                  <h3>$450,000.45</h3>
                                  <div className="pt-1-b">
                                    <p className="profit">+1.25%</p>
                                    <p>+34,000 this week</p>
                                  </div>
                                </div>
                                <div className="pt-1-r">
                                  <div className="select-country">
                                    <img
                                      src={flag}
                                      alt="country"
                                      width="20"
                                      height="20"
                                    />
                                    <p>USD</p>
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
                              </div>
                            </div>
                            <div className="view-level">
                              <div className="view-level-grid">
                                <div className="vlg-top">
                                  <img src={clock} alt="clock" size={18} />
                                  <p>24h Open</p>
                                </div>
                                <div className="vlg-bottom">
                                  <p>N8.850</p>
                                  <p className="profit">+3.07%</p>
                                </div>
                              </div>
                              <div className="view-level-grid">
                                <div className="vlg-top">
                                  <img src={arrowdown} alt="clock" size={18} />
                                  <p>24h Close</p>
                                </div>
                                <div className="vlg-bottom">
                                  <p>N279.000</p>
                                  <p className="loss">+1.25%</p>
                                </div>
                              </div>
                              <div className="view-level-grid">
                                <div className="vlg-top">
                                  <img src={clock} alt="clock" size={18} />
                                  <p>24h Open</p>
                                </div>
                                <div className="vlg-bottom">
                                  <p>N8.850</p>
                                  <p className="profit">+3.07%</p>
                                </div>
                              </div>
                              <div className="view-level-grid">
                                <div className="vlg-top">
                                  <img src={arrowup} alt="clock" size={18} />
                                  <p>24h Low</p>
                                </div>
                                <div className="vlg-bottom">
                                  <p>N288.000</p>
                                  <p className="profit">+1.25%</p>
                                </div>
                              </div>
                            </div>
                            <div className="view-chart">
                              <img
                                src={chartMini}
                                alt="chartMini"
                                height="120"
                              />
                              <div className="view-months">
                                <p>Jan</p>
                                <p>Feb</p>
                                <p>Mar</p>
                                <p>Apr</p>
                                <p>May</p>
                                <p>Jun</p>
                                <p>Jul</p>
                                <p>Aug</p>
                                <p>Sep</p>
                                <p>Oct</p>
                                <p>Nov</p>
                                <p>Dec</p>
                              </div>
                            </div>
                          </div>
                          <div className="view-bottom-right">
                            <h3>Transaction History</h3>
                            <table>
                              <thead>
                                <tr>
                                  <th className="border-left">#</th>
                                  <th>Activity</th>
                                  <th>Amount</th>
                                  <th className="border-right">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Buy</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="profit">$2,361,867.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Buy</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="profit">$867,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Sell</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="loss">$67,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Sell</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="loss">$7,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Sell</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="loss">$7,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>Buy</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="profit">$867,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>Buy</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="profit">$867,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Sell</td>
                                  <td>
                                    <div className="holdings volume">
                                      <p className="loss">$7,100.34</p>
                                      <p>557k</p>
                                    </div>
                                  </td>
                                  <td>Apr 17, 2024</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Overlay ends */}
                <td>
                  <div className="trade-btn">
                    <p>Trade</p>
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
              <th>Name</th>
              <th></th>
              <th className="border-right">24hr %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={Landmark} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">LARL</p>
                    <p className="amount">$100.34</p>
                  </div>
                </div>
              </td>
              {/* Trade */}
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
            </tr>
            <tr>
              <td>2</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={tajm} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">TAJM</p>
                    <p className="amount">$999.99</p>
                  </div>
                </div>
              </td>
              {/* Trade */}
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
              {/* Change (24hr) */}
              <td className="loss">-9.99%</td>
            </tr>
            <tr>
              <td>3</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={Landmark} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">GTCO</p>
                    <p className="amount">$29.99</p>
                  </div>
                </div>
              </td>
              {/* Trade */}
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
            </tr>
            <tr>
              <td>4</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={Landmark} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">LARL</p>
                    <p className="amount">$1,999.99</p>
                  </div>
                </div>
              </td>
              {/* Trade */}
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AssetsTab;

//             <tr>
//               <td>1</td>
//               {/* name */}
//               <td>
//                 <div className="left-side-text">
//                   <img src={Landmark} alt="larl logo" width="40" height="40" />
//                   <div className="first">
//                     <p className="name">LARL</p>
//                     <p className="amount">Landmark Realty Limited</p>
//                   </div>
//                 </div>
//               </td>
//               {/* Holdings */}
//               <td>
//                 <div className="holdings volume">
//                   <p>$2,361,867.34</p>
//                   <p>557k</p>
//                 </div>
//               </td>
//               {/* Price */}
//               <td>$100.34</td>
//               {/* Change (24hr) */}
//               <td className="profit">+0.67%</td>
//               {/* All time */}
//               <td className="profit">+100.67%</td>
//               {/* dividends */}
//               <td>+$2,361.34</td>
//               {/* Action */}
//               <td>
//                 <button
//                   className="view"
//                   type="button"
//                   onClick={() => setIsOverlay(true)}
//                 >
//                   view
//                 </button>
//               </td>
//               {/* overlay */}
//               <AnimatePresence>
//                 {isOverlay && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="view-wrapper"
//                   >
//                     <div
//                       initial={{ scale: 0.8, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.8, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeOut" }}
//                       className="view-card-wrapper"
//                     >
//                       <div className="view-top-1">
//                         <p>
//                           Home / Portfolio /<span>LARL</span>
//                         </p>
//                         <div className="view-close">
//                           <RiCloseFill
//                             size={22.08}
//                             onClick={() => setIsOverlay(false)}
//                           />
//                         </div>
//                       </div>
//                       <div className="view-top-2">
//                         <div className="left-side-text">
//                           <img
//                             src={Landmark}
//                             alt="larl logo"
//                             width="60"
//                             height="60"
//                           />
//                           <div className="first">
//                             <p className="name">LARL</p>
//                             <p className="amount">Landmark Realty Limited</p>
//                           </div>
//                         </div>
//                         <button className="view-trade">TRADE</button>
//                       </div>
//                       <div className="view-bottom">
//                         <div className="view-bottom-left">
//                           <div className="pt-wrapper-left">
//                             <div className="pt pt-1">
//                               <div className="pt-1-l">
//                                 <p>Total Assets</p>
//                                 <h3>$450,000.45</h3>
//                                 <div className="pt-1-b">
//                                   <p className="profit">+1.25%</p>
//                                   <p>+34,000 this week</p>
//                                 </div>
//                               </div>
//                               <div className="pt-1-r">
//                                 <div className="select-country">
//                                   <img
//                                     src={flag}
//                                     alt="country"
//                                     width="20"
//                                     height="20"
//                                   />
//                                   <p>USD</p>
//                                   <img
//                                     src={arrowDownLight}
//                                     alt="country"
//                                     width="20"
//                                     height="20"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="pb-wrapper">
//                               <div className="pt pt-2">
//                                 <div className="pt-card pt-2-l">
//                                   <p>Holdings</p>
//                                   <h3>$150,000.45</h3>
//                                   <p className="profit">+1.25% (24h)</p>
//                                 </div>
//                                 <div className="pt-card pt-2-r">
//                                   <p>All-Time Profit</p>
//                                   <h3>+ $50,000.45</h3>
//                                   <p className="profit">+100.25%</p>
//                                 </div>
//                                 <div className="pt-card pt-3-l">
//                                   <p>Avg. Buy Price</p>
//                                   <h3>$9,100.45</h3>
//                                 </div>
//                                 <div className="pt-card pt-3-r">
//                                   <p>Cost Basis</p>
//                                   <h3>$50,000.45</h3>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="view-level">
//                             <div className="view-level-grid">
//                               <div className="vlg-top">
//                                 <img src={clock} alt="clock" size={18} />
//                                 <p>24h Open</p>
//                               </div>
//                               <div className="vlg-bottom">
//                                 <p>N8.850</p>
//                                 <p className="profit">+3.07%</p>
//                               </div>
//                             </div>
//                             <div className="view-level-grid">
//                               <div className="vlg-top">
//                                 <img src={arrowdown} alt="clock" size={18} />
//                                 <p>24h Close</p>
//                               </div>
//                               <div className="vlg-bottom">
//                                 <p>N279.000</p>
//                                 <p className="loss">+1.25%</p>
//                               </div>
//                             </div>
//                             <div className="view-level-grid">
//                               <div className="vlg-top">
//                                 <img src={clock} alt="clock" size={18} />
//                                 <p>24h Open</p>
//                               </div>
//                               <div className="vlg-bottom">
//                                 <p>N8.850</p>
//                                 <p className="profit">+3.07%</p>
//                               </div>
//                             </div>
//                             <div className="view-level-grid">
//                               <div className="vlg-top">
//                                 <img src={arrowup} alt="clock" size={18} />
//                                 <p>24h Low</p>
//                               </div>
//                               <div className="vlg-bottom">
//                                 <p>N288.000</p>
//                                 <p className="profit">+1.25%</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="view-chart">
//                             <img
//                               src={chartMini}
//                               alt="chartMini"
//                               height="120"
//                             />
//                             <div className="view-months">
//                               <p>Jan</p>
//                               <p>Feb</p>
//                               <p>Mar</p>
//                               <p>Apr</p>
//                               <p>May</p>
//                               <p>Jun</p>
//                               <p>Jul</p>
//                               <p>Aug</p>
//                               <p>Sep</p>
//                               <p>Oct</p>
//                               <p>Nov</p>
//                               <p>Dec</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="view-bottom-right">
//                           <h3>Transaction History</h3>
//                           <table>
//                             <thead>
//                               <tr>
//                                 <th className="border-left">#</th>
//                                 <th>Activity</th>
//                                 <th>Amount</th>
//                                 <th className="border-right">Date</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               <tr>
//                                 <td>1</td>
//                                 <td>Buy</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="profit">$2,361,867.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>2</td>
//                                 <td>Buy</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="profit">$867,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>3</td>
//                                 <td>Sell</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="loss">$67,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>4</td>
//                                 <td>Sell</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="loss">$7,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>5</td>
//                                 <td>Sell</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="loss">$7,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>6</td>
//                                 <td>Buy</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="profit">$867,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>7</td>
//                                 <td>Buy</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="profit">$867,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                               <tr>
//                                 <td>8</td>
//                                 <td>Sell</td>
//                                 <td>
//                                   <div className="holdings volume">
//                                     <p className="loss">$7,100.34</p>
//                                     <p>557k</p>
//                                   </div>
//                                 </td>
//                                 <td>Apr 17, 2024</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//               {/* Overlay ends */}
//               <td>
//                 <div className="trade-btn">
//                   <p>Trade</p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>2</td>
//               {/* name */}
//               <td>
//                 <div className="left-side-text">
//                   <img src={tajm} alt="larl logo" width="40" height="40" />
//                   <div className="first">
//                     <p className="name">TAJM</p>
//                     <p className="amount">TajBank Mudarabah Sukuk</p>
//                   </div>
//                 </div>
//               </td>
//               {/* Holdings */}
//               <td>
//                 <div className="holdings volume">
//                   <p>$867,100.34</p>
//                   <p>557k</p>
//                 </div>
//               </td>
//               {/* Price */}
//               <td>$999.99</td>
//               {/* Change (24hr) */}
//               <td className="loss">-9.99%</td>
//               {/* All time */}
//               <td className="profit">+20.67%</td>
//               {/* dividends */}
//               <td>+$3,453.99</td>
//               {/* Action */}
//               <td>
//                 <button
//                   className="view"
//                   type="button"
//                   onClick={() => setIsOverlay(true)}
//                 >
//                   view
//                 </button>
//               </td>
//               <td>
//                 <div className="trade-btn">
//                   <p>Trade</p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>3</td>
//               {/* name */}
//               <td>
//                 <div className="left-side-text">
//                   <img src={Landmark} alt="larl logo" width="40" height="40" />
//                   <div className="first">
//                     <p className="name">GTCO</p>
//                     <p className="amount">Guaranty Trust Bank</p>
//                   </div>
//                 </div>
//               </td>
//               {/* Holdings */}
//               <td>
//                 <div className="holdings volume">
//                   <p>$67,100.34</p>
//                   <p>557k</p>
//                 </div>
//               </td>
//               {/* Price */}
//               <td>$29.99</td>
//               {/* Change (24hr) */}
//               <td className="profit">+0.67%</td>
//               {/* All time */}
//               <td className="profit">+6.67%</td>
//               {/* dividends */}
//               <td>$52,329.99</td>
//               {/* Action */}
//               <td>
//                 <button
//                   className="view"
//                   type="button"
//                   onClick={() => setIsOverlay(true)}
//                 >
//                   view
//                 </button>
//               </td>
//               <td>
//                 <div className="trade-btn">
//                   <p>Trade</p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>4</td>
//               {/* name */}
//               <td>
//                 <div className="left-side-text">
//                   <img src={Landmark} alt="larl logo" width="40" height="40" />
//                   <div className="first">
//                     <p className="name">LARL</p>
//                     <p className="amount">Landmark Realty Limited</p>
//                   </div>
//                 </div>
//               </td>
//               {/* Holdings */}
//               <td>
//                 <div className="holdings volume">
//                   <p>$7,100.34</p>
//                   <p>557k</p>
//                 </div>
//               </td>
//               {/* Price */}
//               <td>$1,999.99</td>
//               {/* Change (24hr) */}
//               <td className="profit">+0.67%</td>
//               {/* All time */}
//               <td className="profit">+3.67%</td>
//               {/* dividends */}
//               <td>$13,999,344.99</td>
//               {/* Action */}
//               <td>
//                 <button
//                   className="view"
//                   type="button"
//                   onClick={() => setIsOverlay(true)}
//                 >
//                   view
//                 </button>
//               </td>
//               <td>
//                 <div className="trade-btn">
//                   <p>Trade</p>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }

// export default AssetsTab;
