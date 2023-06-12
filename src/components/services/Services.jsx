import React from "react";
import "./Services.css";
import Company from "../../assets/company.png";

const Services = () => {
  return (
    <div className="Services">
      <div>
        <span className="stroke-text">OUR </span>
        <span>SERVICES</span>
      </div>
      <div>
        <div className="left-s">
          <img src={Company} alt="" />
          <div>
            <span>
              Dhanwati Pharmaceuticals seeks long-term and transparent
              relationships with its business partners, and enters into all
              transactions with integrity and trust.
            </span>
          </div>
        </div>
        <div className="right-s">
        <ul className="services-menu">
          <li>B2C: Exporting products under Dhanwati Pharmaceuticals brands.</li>
          <li>Export: commercial transactions related to various kinds of commodities.</li>
          <li>B2B: Exporting our products to your shope and pharmacy with sufficient price.</li>
          <li>Services: Provoide best services in nutriton.</li>
          <li>Contract manufacturing: Dhanwati Pharmaceuticals serves as a key technical consultant between manufacturers and overseas clients.</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
