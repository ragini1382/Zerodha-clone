import React from "react";

function Universe() {
  return (<div className="container mt-5">
    <div className="row text-center">
      <h2 className="mt-5">The Zerodha Universe</h2>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="col-4 p-3 mt-5">
        <img src="media\smallcaseLogo.png" />
        <p className="text-small text-muted">Thematic investment platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\streakLogo.png" style={{ width: "30%" }} />
        <p className="text-small text-muted">Algo & strategy platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\sensibullLogo.svg" />
        <p className="text-small text-muted">options trading platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\zerodhaFundhouse.png" style={{ width: "40%" }} />
        <p className="text-small text-muted">Thematic investment platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\goldenpiLogo.png" />
        <p className="text-small text-muted">Algo & strategy platform</p>
      </div>
      <div className="col-4 p-3 mt-5">
        <img src="media\dittoLogo.png" style={{ width: "20%" }} />
        <p className="text-small text-muted">options trading platform</p>
      </div>
      <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{ width: "20%", margin: "0 auto" }} > Sign up Now </button>
    </div>
   
    </div>
  );
}

export default Universe;
