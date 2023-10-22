import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signinform = () => {
   
    const [email , setEmail ] = useState('');
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");

    let navigate = useNavigate();

    let details = {email, password}

    const signin=()=>{
      axios.post.post("http://localhost:4300/user/signin", details)
      .then((result)=>{
        if (result.data.response) {
          
          // setmessage(result.data.message);
          navigate("/");
        } else {
          setmessage(result.data.message);
        }
      })
    }

    
  return (
    <>
      <div className="bg-info bg-gradient">
        <div className="row vh-100 bg-info bg-gradient align-items-center">
          <div className="col-7 mx-auto bg-light p-5 rounded-5">
            <h1 className="text-primary text-center mb-3">Welcome, Back!!</h1>
            <h3 className="text-center text-secondary">Sign In</h3>
            {message !== "" ? (
                <div class="alert alert-danger border-4" role="alert">
                  {message}
                </div>
              ) : (
                ""
              )}
            <input
              type="text"
              name="email"
              className="mb-3 form-control"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="mb-3 form-control"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <button onClick={()=>signin()} className="btn btn-lg rounded-0 btn-info form-control">
              
              Signin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
