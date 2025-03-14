import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top p-5 f-6 text-muted">
        <div className="col-6">
          <p>
            We kick-started operations on the 15th of August, <br />
            2010 with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for  <br/>barrier.
            <br /> <br />
            Today, our disruptive pricing models and in-house  <br/> technology have
            made us the biggest stock broker  <br/>in India. <br /> <br />
            Over 1+ Crore clients place millions of orders every day <br/> through our
            powerful ecosystem of investment <br/> platforms, contributing over 15% of
            all Indian retail <br/> trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p>
            In addition, we run a number of popular open online  <br/>educational and
            community initiatives to empower retail <br/> traders and investors.
            <br />
            <br />
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested <br/> in several fintech
            startups with the goal of growing the <br/> Indian capital markets.
            <br />
            <br />
            And yet, we are always up to something new every day.  <br/>Catch up on
            the latest updates on our{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              blog{" "}
            </a>
            or see what <br/> the media is
            <a href="/" style={{ textDecoration: "none" }}>
            
              saying about us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
