import React from "react";
import { Link } from "react-router-dom";
import { AiFillMediumCircle } from "react-icons/ai";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <AiFillMediumCircle size="35px" /> DemoSite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link active dropdown-toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="services1">
                    Services1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="services2">
                    Services2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="services3">
                    Services3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
