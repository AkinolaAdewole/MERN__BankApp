import React from "react";
import "../components/style/Header.css";
import chip from "./resources/chippng.png";
import mastercard from "./resources/mastercard.png";

const OnlineCard = () => {
  return (
    <>
      {/* Container for the online card */}
      <div className="trans shadow-sm rounded-4  pt-3 px-3">
        <div className="row align-items-center mb-3">
          <div className="col-8">
            {/* Online Transactions heading */}
            <p className="m-0">Online Transactions</p>
          </div>
          <div className="col-4">
            {/* Chip image (possibly representing a card chip) */}
            <img src={chip} width={70} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            {/* Label for card number */}
            <p className="m-0">No:</p>
          </div>
          <div className="col-9">
            {/* Masked card number */}
            <h4 className="text-end text-monospace">**** **** 3498</h4>
          </div>
        </div>
        <div className="row mt-3 rounded-4 py-3 text-white align-items-center bg-info  bg-gradient">
          <div className="col-9">
            {/* Label for card expiration date */}
            <p className="m-0">Exp: 08/26</p>
          </div>
          <div className="col-3">
            {/* Mastercard logo image */}
            <img src={mastercard} alt="" height={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCard;
