import { Link } from "react-router-dom";
import flag from "../Images/Flag.svg";
import arrowDownLight from "../Images/Arrow-down-light.svg";
import Eyeoff from "../Images/Eye-off.svg";
import plus from "../Images/Plus.svg";
import Liquidity from "../Images/Liquidity-light.svg";
import withdraw from "../Images/Withdraw.svg";
import arrowLeftRight from "../Images/Arrow-left-right-light.svg";
import landmark from "../Images/Landmark.svg";
import bar from "../Images/Bar.svg";
import flashlight from "../Images/Flashlight.svg";
import progress from "../Images/Round-progress.svg";
import play from "../Images/Play.svg";
import referral from "../Images/Referral.svg";
// import Eyeon from "../Images/Eye-on.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-wrapper">
          <div className="pleasantry">
            <p>Good Morning, Horlarh</p>
          </div>
          <div className="card-wrapper">
            <div className="left-card-wrapper">
              <div className="card">
                <div className="card-content">
                  <div className="card-header-left">
                    <div className="select-country">
                      <img src={flag} alt="country" width="20" height="20" />
                      <img
                        src={arrowDownLight}
                        alt="country"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="figures">
                      <div className="balance">
                        <h1 className="balance-amount">
                          $30,000<span>.00</span>
                        </h1>
                        <img
                          src={Eyeoff}
                          alt="visible"
                          width="20"
                          height="20"
                          className="visible"
                        />
                      </div>
                      <p className="percent">+1,966 (2.4%)</p>
                    </div>
                  </div>
                  <div className="card-header-right">
                    <div className="opt">
                      <div className="icon-bg">
                        <img src={plus} alt="connect" width="24" height="24" />
                      </div>
                      <p className="deposit">Deposit</p>
                    </div>
                    <div className="opt">
                      <div className="icon-bg withdraw-bg">
                        <img
                          src={withdraw}
                          alt="connect"
                          width="24"
                          height="24"
                        />
                      </div>
                      <p className="withdraw">Withdraw</p>
                    </div>
                    <div className="opt">
                      <div className="icon-bg mute-bg">
                        <img
                          src={arrowLeftRight}
                          alt="connect"
                          width="24"
                          height="24"
                        />
                      </div>
                      <p className="Convert">Convert</p>
                    </div>
                    <div className="opt">
                      <div className="icon-bg mute-bg">
                        <img
                          src={Liquidity}
                          alt="connect"
                          width="24"
                          height="24"
                        />
                      </div>
                      <p className="add-liquidity">Add Liquidity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content trending">
                  <div className="top">
                    <div className="text-wrapper">
                      <p className="title">Trending Securities</p>
                      <p className="sub-title">
                        Top performing securities on AssetBase
                      </p>
                    </div>
                    <Link to="/viewAll" className="view-all">
                      view all
                    </Link>
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
                <div className="card-content launchpad-wrapper">
                  <div className="top">
                    <div className="text-wrapper launchpad">
                      <p className="title">Launchpad</p>
                      <p className="sub-title">
                        A curated list of securities you can fund
                      </p>
                    </div>
                    <Link to="/viewAll" className="view-all">
                      view all
                    </Link>
                  </div>
                  <div className="bottom">
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="last-card-wrapper">
                      <div className="bottom-card last-card">
                        <div className="left-side">
                          <div className="last-bg-img">
                            <div className="left-side-text">
                              <img
                                src={landmark}
                                alt="landmark logo"
                                width="40"
                                height="40"
                              />
                              <div className="first">
                                <p className="name">LARL</p>
                                <p className="amount">
                                  Landmark Realty Limited
                                </p>
                              </div>
                            </div>
                            <div className="middle-wrapper">
                              <div className="middle mid-value">
                                <p className="name">Price Per Share</p>
                                <p className="funding">Funding round closes</p>
                              </div>
                              <div className="middle last-value">
                                <p className="name">$500</p>
                                <p className="days">
                                  In <span>15 days</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-card-progress">
                        <img src={bar} alt="progress-bar" />
                        <div className="text">
                          <div className="progress-bar-left">
                            <img
                              src={flashlight}
                              alt="flashlight"
                              width="14"
                              height="14"
                            />
                            <p className="percent-raised">15% raised</p>
                          </div>
                          <p className="amount-available">
                            2,300,000 available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-card-wrapper">
              <div className="brown-card">
                <div className="brown-card-left">
                  <img
                    src={progress}
                    alt="progress icon"
                    width="54"
                    height="54"
                  />
                  <div className="kyc-wrapper">
                    <p className="kyc-title">Complete KYC</p>
                    <p className="kyc-text">Finish setting up your account</p>
                  </div>
                </div>
                <img src={play} alt="play" width="26.5" height="26.5" />
              </div>
              <div className="referral-card">
                <div className="referral-card-content">
                  <img
                    src={referral}
                    alt="referral-icon"
                    width="78"
                    height="78"
                  />
                  <div className="referral-text">
                    <p className="referral-title">
                      Invite 5x friends and get gains on multiple things in the
                      future with our referral programme.
                    </p>
                  </div>
                </div>
              </div>
              <div className="notifications-card">
                <div className="notifications-card-content">
                  <div className="notifications-header">
                    <p className="notifications-title">Notifications</p>
                    <p className="notifications-text">
                      Catch up on your notifications
                    </p>
                  </div>
                  <div className="notification-wrapper">
                    <div className="notification"></div>
                    <div className="notification"></div>
                    <div className="notification"></div>
                    <div className="notification"></div>
                    <div className="notification"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
