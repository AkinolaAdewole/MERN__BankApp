import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signinform = () => {
   
    const [email , setEmail ] = useState('');
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");

    // Inside your component, use state to manage user data and token
      const [user, setUser] = useState(null);
      // const [userId, setUserId] = useState(null);
      const [token, setToken] = useState(null);

    let navigate = useNavigate();

    let details = {email, password}

    const signin = () => {
      axios.post("http://localhost:4300/user/signin", details)
        .then((result) => {
          if (result.data.response) {
            // Assuming the server sends user and token in the response
            const { user, token, message } = result.data;
    
            // Update state with user and token
            setUser(user);
            setToken(token)

             // Log the user
             console.log(user);
            //  console.log(token);
            
            // setUserId(user._id);
            // console.log(userId);

            let userId= user._id
    
            // Navigate to the dashboard
            navigate(`/dashboard/${userId}`);
          } else {
            // Update the message state with the error message
            setmessage(result.data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    

    
  return (
    <>
      <div className="bg-info bg-gradient">
        <div className="row vh-100 bg-info bg-gradient align-items-center">
          <div className="col-7 mx-auto bg-light p-5 rounded-5">
            <h1 className="text-warning text-center mb-3">Welcome</h1>
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
            <button onClick={()=>signin()} className="btn btn-lg rounded-0 btn-warning form-control">
              
              Signin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
