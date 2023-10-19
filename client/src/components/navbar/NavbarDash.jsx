import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../resources/logo.png";
import "../components/style/Header.css";

const NavbarDash = ({ currentUser }) => {
  let navigate = useNavigate();

  const signout = () => {
    localStorage.token = "";
    navigate("/signin");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width={120} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Help!
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4 " to="/signup">
                  {currentUser.email}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4 text-white" to="/signin">
                  <button onClick={signout} className="btn btn-primary px-5 rounded-0 text-white">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                    SignOut
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default NavbarDash;
