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
  const [balancee, setBalancee] = useState(0);
  const [id,setId] = useState('')

  const { userId} = useParams()
  console.log(userId);

  // let amount = (newAmount*100);
  let amount = parseFloat(newAmount) * 100; // Convert string to number for calculations

  // let balance = Number(balancee) + Number(newAmount);
  let balance = balancee + amount;
  let date = new Date().toLocaleDateString();
  let newObject = {balance, id:id, date,type:true, amount:newAmount, description:"Personal Funding"}

  let publicKey = 'pk_test_7e22782b6a5fc0d219cfb6a53bc9338894712525';

  const componentProps={
    email,
    amount,
    metadata: {
      firstname,
      phone:"",
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () =>{
      alert(`Your Account has been funded with ${newAmount}`);
      // let endpoint = `http://localhost:4300/user/updatebalance/${userId}`;
      // let newObject = {balance: balancee, id:id,date,type:true, amount:newAmount, description:"Personal Funding"}
      axios.post(`http://localhost:4300/user/updatebalance`, newObject).then((result) => {
        console.log(result);
      });

      setNewAmount("")
    } ,
    onClose: () => alert('Payment canceled by user.'),
  }

  const fundAcc=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:4300/user/updatebalance`, newObject)
  }


  useEffect(() => {
    // user ID available in my props
    const endpoint = `http://localhost:4300/user/dashboard/${userId}`;

    axios.get(endpoint)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
        setFirstName(response.data.firstname)
        setEmail(response.data.email)
        setBalancee(response.data.balance)
        setId(response.data._id)
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
              {/* <PaystackButton className="btn btn-success" {...componentProps}  /> */}
              <button onClick={fundAcc}>Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the FundAccount component
export default FundAccount;
