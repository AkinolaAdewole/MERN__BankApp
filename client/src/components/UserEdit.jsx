import React from "react";

const Useredit = () => {
  return (
    <>
      <div className="col-7">
        <h1 className="text-primary fw-bolder text-center my-3">
          Update Details
        </h1>

        <div className="col-9 mx-auto">
          <fieldset>
            <legend>Personal Information </legend>
            <input
              type="text"
              name="firstname"
              className="mb-3 form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastname"
              className="mb-3 form-control"
              placeholder="Last Name"
            />
            <input
              type="date"
              name="dob"
              className="mb-3 form-control"
              placeholder="Date of Birth"
            />
            <select name="gender" className="form-control mb-3" id="">
              <option value="male">Gender</option>
              <option value="male">Male</option>
              <option value="male">Female</option>
              <option value="male">Person With Rights</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Account Information</legend>
            <input
              type="text"
              name="username"
              className="mb-3 form-control"
              placeholder="Username"
            />
            <input
              type="email"
              name="email"
              className="mb-3 form-control"
              placeholder="Email"
            />

            <input
              type="number"
              name="acc_no"
              className="mb-3 form-control"
              placeholder="Account Number"
            />
            <input
              type="number"
              name="bvn"
              className="mb-3 form-control"
              placeholder="Bank Verification Number"
            />
            <input
              type="password"
              name="password"
              className="mb-3 form-control"
              placeholder="Password"
            />
          </fieldset>

          <button className="btn btn-lg btn-success form-control">
            {" "}
            Signup{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Useredit;
