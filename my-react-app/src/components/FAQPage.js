import React from 'react';
import { Link } from 'react-router-dom';

function FaqPage() {
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
        <h1>Frequently Asked Questions</h1>
        <ul>
          <li>
            <h4>Question 1?</h4>
            <p>Answer 1.</p>
          </li>
          <li>
            <h4>Question 2?</h4>
            <p>Answer 2.</p>
          </li>
          <li>
            <h4>Question 3?</h4>
            <p>Answer 3.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FaqPage;
