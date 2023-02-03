import React from "react";
import "./priceing.css";
import { Link } from "react-router-dom";
const Price = () => {
  return (
    <div className="pricing">
      <div className="cardContainer">
        <div className="card">
          <h3>-BASIC-</h3>
          <span className="bar"></span>
          <p className="btc">$50</p>
          <p>- 3 Days-</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            PERCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-PREMIUM-</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p>- 5 Days-</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            PERCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-BUSINESS-</h3>
          <span className="bar"></span>
          <p className="btc">$300</p>
          <p>- 10 Days-</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link className="btn" to="/contact">
            PERCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Price;
