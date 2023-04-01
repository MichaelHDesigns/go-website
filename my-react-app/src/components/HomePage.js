import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
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
