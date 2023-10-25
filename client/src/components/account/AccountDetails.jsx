import React, { useState, useEffect } from "react";
import FundAccount from "./FundAccount";
import Transfers from "../Transfer"; // Update the import path to the correct Transfers component
import axios from "axios";
import { useParams } from "react-router-dom";

const AccountDetails = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    // Fetch user data based on the userId parameter
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios
      .get(endpoint)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return (
    <>
      <div className="mb-3 p-3">
        <h3>
          Account Details
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </h3>
        <div className="d-md-flex d-block ">
          <div className="col-12 rounded-3 p-3 bg-light  col-md-6 ">
            <p className="text-secondary m-0">Your balance</p>
            {/* Display user's balance if available */}
            {user && <h3>${user.balance}</h3>}
            <p className="m-0">CARDS</p>
          </div>

          <div className="col-12 p-3 bg-success bg-gradient col-md-6 rounded-3">
            <p className="text-white m-0">Account No:</p>
            {/* Display user's account number if available */}
            {user && (
              <h3 className="font-monospace text-white">{user.acctno}</h3>
            )}

            <h4
              className="btn btn-light text-success m-1"
              data-bs-toggle="modal"
              data-bs-target="#FundAccount"
            >
              <i className="fa fa-money" aria-hidden="true"></i> Fund Account
            </h4>
            <h4
              className="btn btn-info text-white m-1"
              data-bs-toggle="modal"
              data-bs-target="#transferModal"
            >
              <i className="fa fa-send-o" aria-hidden="true"></i> Send Money
            </h4>
          </div>

          {/* Include the FundAccount and Transfers components as modals */}
          <FundAccount currentUser={user} />
          <Transfers currentUser={user} />
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
