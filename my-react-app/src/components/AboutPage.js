import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
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
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet libero eu ante fringilla congue. Nulla hendrerit gravida sapien, sit amet hendrerit odio rhoncus a. Nullam eu libero lorem. Nullam scelerisque, magna vel posuere bibendum, elit elit sollicitudin metus, in tincidunt neque massa vel quam.</p>
      </div>
    </div>
  );
}

export default AboutPage;
