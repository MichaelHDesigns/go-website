import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DonationABI from '../abi/Donation.json';
import { ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';

const provider = new JsonRpcProvider('http://206.189.231.104:8545');
const signer = provider.getSigner();

// Replace the contract address below with your own deployed contract address
const donationContractAddress = '0x13d624FE862C520f78A565DfD374710d85177eA2';

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationTx, setDonationTx] = useState('');

  const donate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const donationContract = new ethers.Contract(donationContractAddress, DonationABI, signer);

    const donationValue = ethers.utils.parseEther(donationAmount);
    const donationTransaction = await donationContract.donate({ value: donationValue });
    await donationTransaction.wait();

    setDonationTx(donationTransaction.hash);
    setDonationAmount('');
  };

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
