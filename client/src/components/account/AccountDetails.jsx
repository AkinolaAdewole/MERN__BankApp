import React from "react";
import FundAccount from "./FundAccount";
import Transfers from "../Transfer";

const AccountDetails = ({ currentUser }) => {
  // Destructure user data
  let { balance, acc_no } = currentUser;

  return (
    <>
      <div className="mb-3 p-3">
        <h3>
          Account Details
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </h3>
        <div className="d-md-flex d-block ">
          {/* Left column displaying account balance */}
          <div className="col-12 rounded-3 p-3 bg-light  col-md-6 ">
            <p className="text-secondary m-0">Your balance</p>
            <h3>${balance}</h3>
            <p className="m-0">CARDS</p>
          </div>

          {/* Right column displaying account number and actions */}
          <div className="col-12 p-3 bg-success bg-gradient col-md-6 rounded-3">
            <p className="text-white m-0">Account No:</p>
            <h3 className="font-monospace text-white">{acc_no}</h3>

            {/* Button to fund the account (triggers the FundAccount modal) */}
            <h4
              className="btn btn-light text-primary m-1"
              data-bs-toggle="modal"
              data-bs-target="#FundAccount"
            >
              <i className="fa fa-money" aria-hidden="true"></i> Fund Account
            </h4>

            {/* Button to make a transfer (triggers the Transfers modal) */}
            <h4
              className="btn btn-info text-white m-1"
              data-bs-toggle="modal"
              data-bs-target="#transferModal"
            >
              <i className="fa fa-send-o" aria-hidden="true"></i> Send Money
            </h4>
          </div>

          {/* Include the FundAccount and Transfers components as modals */}
          <FundAccount currentUser={currentUser} />
          <Transfers currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
