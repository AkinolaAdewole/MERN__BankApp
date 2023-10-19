import React, { useState } from "react";


const Signinform = ({signin,message}) => {
   
    const [em_username , setem_username ] = useState();
    const [password, setpassword] = useState("");

    let details = {em_username, password}

    
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
              onChange={(e)=>setem_username(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="mb-3 form-control"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <button onClick={()=>signin(details )} className="btn btn-lg rounded-0 btn-info form-control">
              {" "}
              Signin{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
