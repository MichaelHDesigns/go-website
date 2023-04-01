import React from 'react';
import { Link } from 'react-router-dom';

function FaqPage() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Give</button>
            <div className="dropdown-content">
              <Link to="/donate">Donate</Link>
              <Link to="/fundraisers">Fundraisers</Link>
              <Link to="/statistics">Statistics</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Info</button>
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </li>
      </ul>
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
