import React from "react";
import Navbar from "../Navbar";
import "../style/Header.css";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="vh-100 row errorbackground text-center align-items-center">
        <h1 className="text-primary fw-bold display-3 m-0">
         <strong>Congratulations!!!</strong>
          <br />You discover our error page
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
