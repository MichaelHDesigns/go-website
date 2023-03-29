import React, { useState } from 'react';
import donationABI from '../abi/donationABI.json';
import { ethers } from 'ethers';

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationTx, setDonationTx] = useState('');

  const donate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const donationContract = new ethers.Contract('0x123...', donationABI, signer);

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
          <img src="/images/HTH_Logo.png" alt="HTH Logo"/>
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