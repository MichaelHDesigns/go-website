import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FundraiserFactory from "../abi/FundraiserFactory.json";
import Fundraiser from "../abi/Fundraiser.json";
import Web3 from "web3";


function FundraiserPage(props) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [fundraiser, setFundraiser] = useState(null);
  const [goal, setGoal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    async function init() {
      const web3 = await Web3();
      setWeb3(web3);

      const contract = new web3.eth.Contract(FundraiserFactory.abi, props.match.params.address);
      setContract(contract);

      const goal = await contract.methods.goal().call();
      setGoal(goal);

      const balance = await web3.eth.getBalance(props.match.params.address);
      setBalance(balance);

      const title = await contract.methods.title().call();
      setTitle(title);

      const description = await contract.methods.description().call();
      setDescription(description);
    }

    init();
  }, [props.match.params.address]);

  async function donate() {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.donate().send({ from: accounts[0], value: donation });
    const balance = await web3.eth.getBalance(props.match.params.address);
    setBalance(balance);
    setDonation(0);
  }

 function ConnectButton() {
  const [web3, setWeb3] = useState(null);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (!web3) {
    return (
      <div>
        <h1>Connect to Web3</h1>
        <button onClick={handleConnect}>Connect</button>
      </div>
    );
  } else {
    return <p>Web3 connected!</p>;
  }
}

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
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Goal: {web3.utils.fromWei(goal)} ETH</p>
      <p>Balance: {web3.utils.fromWei(balance)} ETH</p>
      <input type="number" value={donation} onChange={(e) => setDonation(e.target.value)} />
      <button onClick={donate}>Donate</button>
    </div>
   </div>
  );
}

export default FundraiserPage;
