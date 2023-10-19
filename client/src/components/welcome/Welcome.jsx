import React from "react";

const Welcome = ({firstname}) => {
  return (
    <>
      <div className="container">
        <div className="row align-items center">
          <div className="col-7">
            <p className="text-secondary mt-2 mb-1">Welcome</p>
            <h1>{firstname}... </h1>
          </div>
          <div className="col-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border-primary"
                placeholder="Help..."
              />
              <span className="input-group-text bg-primary border-primary">
                <i className="fa fa-send" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
