import React from 'react';
import { Link } from 'react-router-dom';

function FaqPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {/* Insert your logo here */}
            My Logo
          </Link>
          <div className="navbar-nav">
            <Link to="/donate" className="nav-link">
              Donate
            </Link>
            <Link to="/fundraiser" className="nav-link">
              Fundraiser
            </Link>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
            <Link to="/about" className="nav-link active">
              About
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
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