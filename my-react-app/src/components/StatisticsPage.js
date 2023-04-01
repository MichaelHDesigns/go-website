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

    <div>
      <h1>Statistics Page</h1>
      <p>Total Donations: {donationTotal}</p>
      <p>Total Fundraisers: {fundraiserTotal}</p>
    </div>
   </div>
  );
};

export default StatisticsPage;
