import React, { useState } from "react";
import FundraiserContract from "../abi/Fundraiser.json";
import getWeb3 from "../js/getWeb3";

function FundraiserPage() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [goal, setGoal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);

  const handleConnect = async () => {
    try {
      const web3Instance = await getWeb3();
      setWeb3(web3Instance);

      const accounts = await web3Instance.eth.getAccounts();
      setAccounts(accounts);

      const instance = new web3Instance.eth.Contract(
        FundraiserContract.abi,
        FundraiserContract.networks[await web3Instance.eth.net.getId()].address
      );
      setContract(instance);

      setGoal(await instance.methods.goal().call());
      setBalance(await instance.methods.getBalance().call());
    } catch (error) {
      console.error(error);
    }
  };

  const handleDonate = async () => {
    try {
      const value = web3.utils.toWei(donationAmount.toString(), "ether");
      await contract.methods.donate().send({ from: accounts[0], value });
      setBalance(await contract.methods.getBalance().call());
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefund = async () => {
    try {
      await contract.methods.refund().send({ from: accounts[0] });
      setBalance(await contract.methods.getBalance().call());
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setDonationAmount(e.target.value);
  };

  if (!web3) {
    return (
      <div>
        <h1>Connect to Web3</h1>
        <button onClick={handleConnect}>Connect</button>
      </div>
    );
  }

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
      <div>
        <h1>Fundraiser</h1>
        <p>Goal: {web3.utils.fromWei(goal.toString(), "ether")} ETH</p>
        <p>Balance: {web3.utils.fromWei(balance.toString(), "ether")} ETH</p>
        {accounts[0] && (
          <div>
            <h2>Donate</h2>
            <input type="number" onChange={handleInputChange} />
            <button onClick={handleDonate}>Donate</button>
            <h2>Refund</h2>
            <button onClick={handleRefund}>Refund</button>
        </div>
      )}
    </div>
  );
}
export default FundraiserPage;
          <button onClick={handleRefund}>Refund</button>
        </div>
      )}
    </div>
  );
}
export default FundraiserPage;