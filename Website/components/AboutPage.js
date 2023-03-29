import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
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
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet libero eu ante fringilla congue. Nulla hendrerit gravida sapien, sit amet hendrerit odio rhoncus a. Nullam eu libero lorem. Nullam scelerisque, magna vel posuere bibendum, elit elit sollicitudin metus, in tincidunt neque massa vel quam.</p>
      </div>
    </div>
  );
}

export default AboutPage;