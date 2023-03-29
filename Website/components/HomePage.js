import React from 'react';

function HomePage() {
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