// Import necessary dependencies and components
import axios from "axios";
import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { useParams } from "react-router-dom";

// Define the FundAccount component that accepts a currentUser prop
const FundAccount = () => {
  // Initialize a state variable to store the user's specified amount
  const [newAmount, setNewAmount] = useState("");
  const [user, setUser] = useState(null);

  const { userId} = useParams()


  useEffect(() => {
    // user ID available in my props
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios.get(endpoint)
      .then((response) => {
        setUser(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




 

  
  // Return the JSX for the FundAccount component
  return (
    <>
      <div
        className="modal fade"
        id="FundAccount"
        tabIndex="-1"
        aria-labelledby="FundAccountLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FundAccountLabel">
                Fund Account
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Input field for the user to enter the funding amount */}
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                onChange={(e) => {
                  setNewAmount(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              {/* Button to close the modal */}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quit
              </button>

              {/* PaystackButton component for initiating the payment */}
              <PaystackButton className="btn btn-success" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the FundAccount component
export default FundAccount;
