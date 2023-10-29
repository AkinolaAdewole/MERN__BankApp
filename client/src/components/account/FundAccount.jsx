// Import necessary dependencies and components
import axios from "axios";
import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { useParams } from "react-router-dom";

const FundAccount = () => {
  // Initialize a state variable to store the user's specified amount
  const [newAmount, setNewAmount] = useState("");
  const [user, setUser] = useState(null);
  const [firstname, setFirstName] = useState('')
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState(0);

  const { userId} = useParams()

  // let publickey = 
  let amount = (newAmount*100);
  // let balance = Number(user.balance) + Number(newAmount);
  let date = new Date().toLocaleDateString();

  console.log(email);
  console.log(firstname);

  const componentProps={
    email,
    amount,
    metadata: {
      firstname,
      phone:"",
    },
    text: 'Pay Now',
    onSuccess: () =>{
      alert(`Your Account`)
    } ,
    onClose: () => alert('Payment canceled by user.'),
  }


  useEffect(() => {
    // user ID available in my props
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios.get(endpoint)
      .then((response) => {
        setUser(response.data);
        // console.log(response.data);
        setFirstName(response.data.firstname)
        // console.log(response.data.firstname);
        setEmail(response.data.email)
        // console.log(response.data.email);
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
              <PaystackButton className="btn btn-success" {...componentProps}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the FundAccount component
export default FundAccount;
