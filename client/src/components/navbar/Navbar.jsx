import React from 'react'
import { Link } from 'react-router-dom'
import './style/navbar.css'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg nav1  bg-light bg-gradient shadow-sm sticky-top z-1000 p-0">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    {/* <img src={logo} alt="" width={120} /> */}
                    Akinola
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link  active"
                          aria-current="page"
                          to="/our-services"
                        >
                          Our Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/about-us">
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link className="nav-link me-4 " to="/signup">
                    Signup
                  </Link>
                  <Link className="nav-link me-4 text-white" to="/signin">
                    <button className="btn btn-primary px-5 rounded-0 text-white">
                      Signin
                    </button>
                  </Link>
                </div>
              </nav>
    </>
  )
}

export default Navbar