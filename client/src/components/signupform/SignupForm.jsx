import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../signupform/signupform.css'

const SignupForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [balance, setbalance] = useState(0);
  const [message, setmessage] = useState("");
  let navigate = useNavigate();

  const signup = () => {
    let acctno = `21${ Math.floor(Math.random()*100020700)}`
    let newAccount = {
      firstname,
      lastname,
      username,
      email,
      password,
      acctno,
      balance:0,
    };
    axios
      .post("http://localhost:4300/user/signup", newAccount)
      .then((result) => {
        if (result.data.response) {
          
          // setmessage(result.data.message);
          navigate("/signin");
        } else {
          setmessage(result.data.message);
        }
      })
      .catch((err) => {
        // console.log(err);
        setmessage(err);
      });
  };

  return (
    <>
      <div className="container`-fluid">
        <div className="row vh-100 align-items-center">
          <div className="d-none d-md-block col-md-5 h-100 signupform border">
            {/* <h1 className=""></h1> */}
          </div>
          <div className="col-7">
            <h1 className="text-warning fw-bolder text-center mb-3">
              Welcome to freedom!!!
            </h1>
            <h2 className="text-center text-secondary">Sign up</h2>
            <div className="col-9 mx-auto">
              {message !== "" ? (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : (
                ""
              )}
              <input
                type="text"
                name="firstname"
                className="mb-3 form-control"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                name="lastname"
                className="mb-3 form-control"
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="text"
                name="username"
                className="mb-3 form-control"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                className="mb-3 form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                className="mb-3 form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => signup()}
                className="btn btn-lg btn-warning form-control"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
