// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundraiserFactory {
    event FundraiserCreated(address indexed owner, address indexed fundraiser, uint256 goal, string title);

    function createFundraiser(uint256 _goal, string memory _title) public {
        require(block.timestamp < 1648617600, "Fundraiser creation is not allowed after 29th March 2022"); // 30-day limit
        Fundraiser newFundraiser = new Fundraiser(payable(msg.sender), _goal, _title);
        emit FundraiserCreated(msg.sender, address(newFundraiser), _goal, _title);
    }
}

contract Fundraiser {
    address payable public owner;
    uint256 public goal;
    uint256 public amountRaised;
    string public title;
    uint256 public creationTime;
    uint256 public totalAmountReceived;
    address payable public donationAddress;

    event GoalReached(address beneficiary, uint256 amountRaised);
    event FundTransfer(address backer, uint256 amount, bool isContribution);
    event TitleSet(string title);
    event DonationReceived(address donor, uint256 amount);
    event TotalAmountReceived(uint256 amount);
    event DonationAddressSet(address donationAddress);

    constructor(
        address payable _owner,
        uint256 _goal,
        string memory _title
    ) {
        owner = _owner;
        goal = _goal;
        title = _title;
        creationTime = block.timestamp;
        donationAddress = _owner; // default to owner's address for receiving donations
    }

    function contribute() public payable {
        require(amountRaised < goal, "Fundraiser goal already reached");

        uint256 amount = msg.value;
        amountRaised += amount;
        totalAmountReceived += amount;

        emit FundTransfer(msg.sender, amount, true);
        emit DonationReceived(msg.sender, amount);
        emit TotalAmountReceived(totalAmountReceived);

        if (amountRaised >= goal) {
            emit GoalReached(owner, amountRaised);
            donationAddress.transfer(amountRaised);
        }
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function setTitle(string memory _title) public {
        require(msg.sender == owner, "Only owner can set title");
        title = _title;
        emit TitleSet(_title);
    }

    function setDonationAddress(address payable _donationAddress) public {
        require(msg.sender == owner, "Only owner can set donation address");
        donationAddress = _donationAddress;
        emit DonationAddressSet(_donationAddress);
    }

    function modifyFundraiser(uint256 _goal, string memory _title) public {
        require(msg.sender == owner, "Only owner can modify fundraiser");
        goal = _goal;
        title = _title;
        emit TitleSet(_title);
    }

    function getTotalAmountReceived() public view returns (uint256) {
        return totalAmountReceived;
    }

    function getDonationAddress() public view returns (address payable) {
        return donationAddress;
    }
}