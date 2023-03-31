import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
<Link to="/" className="navbar-brand">
  <img src="../images/HTH_Logo.png" alt="HTH Logo" />
  Home
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Give
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li>
              <Link to="/donate" className="dropdown-item">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/fundraiser" className="dropdown-item">
                Fundraiser
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="dropdown-item">
                Stats
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Info
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li>
              <Link to="/about" className="dropdown-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="dropdown-item">
                FAQ
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Container 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis malesuada velit, id congue elit dapibus ac. Morbi eleifend rhoncus nulla, eget tincidunt nunc. Pellentesque et tortor eleifend, dignissim metus sit amet, dignissim nibh.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Container 2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis malesuada velit, id congue elit dapibus ac. Morbi eleifend rhoncus nulla, eget tincidunt nunc. Pellentesque et tortor eleifend, dignissim metus sit amet, dignissim nibh.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Container 3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis malesuada velit, id congue elit dapibus ac. Morbi eleifend rhoncus nulla, eget tincidunt nunc. Pellentesque et tortor eleifend, dignissim metus sit amet, dignissim nibh.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;