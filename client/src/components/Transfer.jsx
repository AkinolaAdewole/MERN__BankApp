import React, { useState } from "react";
import axios from "axios";

const Transfers = ({ currentUser }) => {
  // State variables to store user input
  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [descr, setDescr] = useState("");
  const [message, setMessage] = useState("");
  let date = new Date().toLocaleDateString();
  let id = localStorage.token;
  let type = false;

  // Function to handle the transfer request
  const makeTransfer = () => {
    // let EP = process.env.REACT_APP_EP
    let endpoint = "http:localhost:4300/user/transfer";

    // Check if the description field is empty
    if (descr === "") {
      setMessage("Check input fields");
    } else {
      // Check if the amount exceeds the user's balance
      if (amount > currentUser.balance) {
        setMessage("You do not have enough funds to make this transfer");
      } else {
        // Calculate the new balance after the transfer
        let balance = Number(currentUser.balance) - Number(amount);

        // Create a new transfer object
        let newTransfer = { accountNo, descr, date, id, type, amount, balance };

        // Send the transfer request to the server
        axios
          .post("/user/transfer", newTransfer)
          .then((result) => {
            console.log({ result, rex: "y'all tripping" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <>
      {/* Modal for money transfer */}
      <div
        className="modal fade"
        id="transferModal"
        tabIndex="-1"
        aria-labelledby="transferModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transferModalLabel">
                Send Money
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Display a message if there is one */}
              {message !== "" ? (
                <div className="alert alert-primary ">{message}</div>
              ) : (
                ""
              )}

              {/* Input fields for amount, account number, and description */}
              <input
                type="number"
                placeholder="Amount"
                className="form-control mb-3"
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="number"
                placeholder="Account No"
                className="form-control mb-3"
                onChange={(e) => setAccountNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control mb-3"
                onChange={(e) => setDescr(e.target.value)}
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

              {/* Button to initiate the transfer */}
              <button onClick={makeTransfer} className="btn btn-success">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
