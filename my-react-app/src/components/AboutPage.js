import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          HTH
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
                    Statistics
                  </Link>
                </li>
              </ul>
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

      <div className="container my-5">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet libero eu ante fringilla congue. Nulla hendrerit gravida sapien, sit amet hendrerit odio rhoncus a. Nullam eu libero lorem. Nullam scelerisque, magna vel posuere bibendum, elit elit sollicitudin metus, in tincidunt neque massa vel quam.</p>
      </div>
    </div>
  );
}

export default AboutPage;
