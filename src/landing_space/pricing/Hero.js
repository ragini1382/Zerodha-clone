import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Charges</h1>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes</h3>
              <div className="row p-3 mt-5">
                  
          <div className="col-4">
            <img src="media\pricingEquity.svg" />
            <h2>Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
                  </div>
                  
          <div className="col-4">
            <img src="media\intradayTrades.svg" />
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-4">
            <img src="media\pricingEquity.svg" />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
