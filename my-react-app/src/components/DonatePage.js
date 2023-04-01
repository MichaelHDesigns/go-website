import React, { useState } from 'react';
import { Link } from "react-router-dom";
import donationABI from '../abi/Donation.json';
import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';

const provider = new JsonRpcProvider('http://206.189.231.104:8545');
const signer = provider.getSigner();


const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationTx, setDonationTx] = useState('');

  const donate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const donationContract = new ethers.Contract('0x13d624FE862C520f78A565DfD374710d85177eA2', donationABI, signer);

    const donationValue = ethers.utils.parseEther(donationAmount);
    const donationTransaction = await donationContract.donate({ value: donationValue });
    await donationTransaction.wait();

    setDonationTx(donationTransaction.hash);
    setDonationAmount('');
  };

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
      <h1>Donate to our cause</h1>
      <p>Your donations will go directly to support our mission.</p>
      <form onSubmit={(e) => { e.preventDefault(); donate(); }}>
        <label htmlFor="donationAmount">Donation amount:</label>
        <input id="donationAmount" type="number" step="0.01" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
        <button type="submit">Donate</button>
      </form>
      {donationTx && <p>Thank you for your donation. Transaction hash: {donationTx}</p>}
    </div>
  );
};

export default DonatePage;
