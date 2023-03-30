import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import HomelessEmployment from '../abi/HomelessEmployment.json';

const JobsPage = ({ provider, signer }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loadJobs = async () => {
    try {
      const contract = new ethers.Contract(
        HomelessEmployment.networks['6105'].address,
        HomelessEmployment.abi,
        provider
      );

      const jobs = await contract.getJobs();

      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      setErrorMessage('Error loading jobs. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const applyForJob = async (jobId) => {
    try {
      const contract = new ethers.Contract(
        HomelessEmployment.networks['6105'].address,
        HomelessEmployment.abi,
        signer
      );

      const tx = await contract.applyForJob(jobId);
      await tx.wait();

      // Update the jobs list after successful application
      loadJobs();
    } catch (error) {
      setErrorMessage('Error applying for job. Please try again later.');
    }
  };

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
    <div>
      <h1>Available Jobs</h1>

      {loading && <p>Loading jobs...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!loading && jobs.length === 0 && <p>No jobs available at this time.</p>}

      {!loading && jobs.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Salary (ETH)</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{ethers.utils.formatEther(job.salary)}</td>
                <td>
                  <button onClick={() => applyForJob(job.id)}>Apply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   </div>
  );
};

export default JobsPage;