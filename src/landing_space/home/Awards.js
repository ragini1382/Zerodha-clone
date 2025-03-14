import React from "react";

function Awards() {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/largestBroker.svg" alt="Awards" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million zerodha client contributes to over 15% of all retail
            orders volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Features and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives </p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              {" "}
              <ul>
                <li>
                  <p>stocks & IOPs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Gov.Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/pressLogos.png "
            alt="logo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
