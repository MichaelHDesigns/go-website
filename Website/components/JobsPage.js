import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import JobContract from '../abi/JobContract.json';

const JobsPage = ({ provider, signer }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loadJobs = async () => {
    try {
      const contract = new ethers.Contract(
        JobContract.networks['6105'].address,
        JobContract.abi,
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
        JobContract.networks['6105'].address,
        JobContract.abi,
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
  );
};

export default JobsPage;