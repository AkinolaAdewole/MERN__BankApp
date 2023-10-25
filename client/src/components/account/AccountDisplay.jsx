import React from "react";

const AccountDisplay = () => {
  return (
    <>
      {/* Container for the financial information display */}
      <div className="container border rounded-4 p-4 mb-3">
        <div className="row align-items-center">
          {/* First financial information section */}
          <div className="col-12 col-md-4">
            <div className="row mb-3">
              {/* Icon and background color for "Total Earning" */}
              <div className="col-3  rounded-pill bg-info p-3">
                <h3 className="text-white text-center m-0">
                  <i className="fa fa-inbox" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                {/* Title and value for "Total Earning" */}
                <small className="text-secondary">Total Earning</small>
                <h4>$7,000.91</h4>
              </div>
            </div>
          </div>

          {/* Second financial information section */}
          <div className="col-12 col-md-4">
            <div className="row mb-3">
              {/* Icon and background color for "Total Expenses" */}
              <div className="col-3 rounded-pill bg-primary p-3">
                <h3 className="text-white text-center m-0">
                  <i className="fa fa-send-o" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                {/* Title and value for "Total Expenses" */}
                <small className="text-secondary">Total Expenses</small>
                <h4>$2,690.25</h4>
              </div>
            </div>
          </div>

          {/* Third financial information section */}
          <div className="col-12 col-md-4">
            <div className="row ">
              {/* Icon and background color for "Month's Budget" */}
              <div className="col-3 rounded-pill bg-success text-center p-3">
                <h3 className="text-white   m-0">
                  <i className="fa fa-book" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                {/* Title and value for "Month's Budget" */}
                <small className="text-secondary">Month's Budget</small>
                <h4>$1,819.75</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDisplay;
