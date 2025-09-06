import React from 'react'
import {RiArrowRightSLine} from "@remixicon/react";
import Ucm from "../Images/Ucm.svg"

const LiquiditycardCard = () => {
  return (
    <div>
      <div className="liquidityCard-card">
            <img src={Ucm} alt="" width="34" height="34" />
            <div className="lct">
            <div className="lc-1">
                <h3>United Capital Money Market Fund</h3>
                <p>United Capital Money Market Fund</p>
            </div>
            <RiArrowRightSLine className="RiArrowRightSLine" size={30} />
            </div>
            <div className="lcb">
                <div className="lcb-1">
                    <h6>Position Worth</h6>
                    <p className='profit'>$12,000</p>
                </div>
                <div className="lcb-1">
                    <h6>Interest Earned</h6>
                    <p className='profit liq'><span>(+12%)</span> $300 </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiquiditycardCard