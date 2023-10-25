// Import necessary dependencies and components
import axios from "axios";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

// Define the FundAccount component that accepts a currentUser prop
const FundAccount = ({ currentUser }) => {
  // Initialize a state variable to store the user's specified amount
  const [newAmount, setNewAmount] = useState("");

  // Extract user's email and set other variables for Paystack payment
  let email = currentUser.email;
  let publicKey = 'pk_test_81338c74c32ab94adecbb258dc43be07f645286c';
  let name = currentUser.firstname;

  // Calculate the amount in kobo (100 kobo = 1 naira)
  let amount = newAmount * 100;

  // Calculate the new balance after funding the account
  let balance = Number(currentUser.balance) + Number(newAmount);

  // Get the current date as a string
  let date = new Date().toLocaleDateString();

  // Define the componentProps object for PaystackButton
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone: "",
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      // This function is called when the payment is successful
      // Display an alert message with the funded amount
      alert("Your Account Has been Funded with " + newAmount);

      // Define the endpoint for updating the user's balance on the server
      let endpoint = "https://bank-r.herokuapp.com/user/updateBalance";

      // Create an object with data to send to the server
      let newObject = {
        balance: balance,
        id: currentUser._id,
        date,
        type: true,
        amount: newAmount,
        description: "Personal Funding"
      };

      // Send a POST request to the server to update the user's balance
      axios.post("/user/updateBalance", newObject).then((result) => {
        console.log(result);
      });
    },
    onClose: () => {
      // This function is called when the user closes the payment dialog
      alert("Wait! You need this oil, don't go!!!!");
    },
  };

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
              <PaystackButton className="btn btn-success" {...componentProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the FundAccount component
export default FundAccount;
