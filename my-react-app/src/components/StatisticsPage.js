import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Donation from '../abi/Donation.json';
import Fundraiser from '../abi/Fundraiser.json';
import Web3 from '../js/web3';

const StatisticsPage = () => {
  const [web3, setWeb3] = useState(null);
  const [donationContract, setDonationContract] = useState(null);
  const [fundraiserContract, setFundraiserContract] = useState(null);
  const [donationTotal, setDonationTotal] = useState(0);
  const [fundraiserTotal, setFundraiserTotal] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await Web3();
        setWeb3(web3);

        const networkId = await web3.eth.net.getId();

        const donationContract = new web3.eth.Contract(
          Donation.abi,
          Donation.networks[networkId].address
        );
        setDonationContract(donationContract);

        const fundraiserContract = new web3.eth.Contract(
          Fundraiser.abi,
          Fundraiser.networks[networkId].address
        );
        setFundraiserContract(fundraiserContract);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const getDonationTotal = async () => {
      if (web3 && donationContract) {
        const total = await donationContract.methods.getTotalDonations().call();
        setDonationTotal(web3.utils.fromWei(total, 'ether'));
      }
    };

    const getFundraiserTotal = async () => {
      if (web3 && fundraiserContract) {
        const total = await fundraiserContract.methods.getTotalFundraisers().call();
        setFundraiserTotal(total);
      }
    };

    getDonationTotal();
    getFundraiserTotal();
  }, [web3, donationContract, fundraiserContract]);

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

    <div>
      <h1>Statistics Page</h1>
      <p>Total Donations: {donationTotal}</p>
      <p>Total Fundraisers: {fundraiserTotal}</p>
    </div>
   </div>
  );
};

export default StatisticsPage;
