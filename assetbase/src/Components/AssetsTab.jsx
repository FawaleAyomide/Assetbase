import React from "react";
import { Link } from "react-router-dom";
import Landmark from "../Images/Landmark.svg";
import tajm from "../Images/TAJM.svg";

function AssetsTab() {
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
              <th>Dividends</th>
              <th>Action</th>
              <th className="border-right"></th>
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
                    <p className="amount">Landmark Realty Limited</p>
                  </div>
                </div>
              </td>
              {/* Holdings */}
              <td>
                <div className="holdings volume">
                  <p>$2,361,867.34</p>
                  <p>557k</p>
                </div>
              </td>
              {/* Price */}
              <td>$100.34</td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
              {/* All time */}
              <td className="profit">+100.67%</td>
              {/* Dividends */}
              <td>+$2,361.34</td>
              {/* Action */}
              <td>
                <Link to="" className="view">
                  <p>view</p>
                </Link>
              </td>
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={tajm} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">TAJM</p>
                    <p className="amount">TajBank Mudarabah Sukuk</p>
                  </div>
                </div>
              </td>
              {/* Holdings */}
              <td>
                <div className="holdings volume">
                  <p>$867,100.34</p>
                  <p>557k</p>
                </div>
              </td>
              {/* Price */}
              <td>$999.99</td>
              {/* Change (24hr) */}
              <td className="loss">-9.99%</td>
              {/* All time */}
              <td className="profit">+20.67%</td>
              {/* Dividends */}
              <td>+$3,453.99</td>
              {/* Action */}
              <td>
                <Link to="" className="view">
                  <p>view</p>
                </Link>
              </td>
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={Landmark} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">GTCO</p>
                    <p className="amount">Guaranty Trust Bank</p>
                  </div>
                </div>
              </td>
              {/* Holdings */}
              <td>
                <div className="holdings volume">
                  <p>$67,100.34</p>
                  <p>557k</p>
                </div>
              </td>
              {/* Price */}
              <td>$29.99</td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
              {/* All time */}
              <td className="profit">+6.67%</td>
              {/* Dividends */}
              <td>$52,329.99</td>
              {/* Action */}
              <td>
                <Link to="" className="view">
                  <p>view</p>
                </Link>
              </td>
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              {/* name */}
              <td>
                <div className="left-side-text">
                  <img src={Landmark} alt="larl logo" width="40" height="40" />
                  <div className="first">
                    <p className="name">LARL</p>
                    <p className="amount">Landmark Realty Limited</p>
                  </div>
                </div>
              </td>
              {/* Holdings */}
              <td>
                <div className="holdings volume">
                  <p>$7,100.34</p>
                  <p>557k</p>
                </div>
              </td>
              {/* Price */}
              <td>$1,999.99</td>
              {/* Change (24hr) */}
              <td className="profit">+0.67%</td>
              {/* All time */}
              <td className="profit">+3.67%</td>
              {/* Dividends */}
              <td>$13,999,344.99</td>
              {/* Action */}
              <td>
                <Link to="" className="view">
                  <p>view</p>
                </Link>
              </td>
              <td>
                <div className="trade-btn">
                  <p>Trade</p>
                </div>
              </td>
            </tr>
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
