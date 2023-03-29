pragma solidity ^0.8.0;

contract Fundraiser {
    address public owner;
    address public payoutAddress;
    uint public goal;
    uint public raised;
    uint public deadline;
    bool public terminated;
    mapping(address => uint) public donations;
    mapping(address => bool) public donors;

    constructor(uint _goal, address _payoutAddress) {
        owner = msg.sender;
        payoutAddress = _payoutAddress;
        goal = _goal;
        raised = 0;
        deadline = block.timestamp + 30 days;
        terminated = false;
    }

    function donate() public payable {
        require(block.timestamp < deadline, "Fundraiser has ended.");
        require(!terminated, "Fundraiser has been terminated.");
        require(!donors[msg.sender], "Donor has already donated.");
        require(msg.value > 0, "Donation amount must be greater than zero.");
        
        donations[msg.sender] = msg.value;
        donors[msg.sender] = true;
        raised += msg.value;
    }

    function terminate() public {
        require(msg.sender == owner, "Only the owner can terminate the fundraiser.");
        require(block.timestamp >= deadline + 7 days, "Termination is only allowed after 7 days.");
        terminated = true;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw funds.");
        require(raised >= goal, "Goal has not been reached.");
        
        payable(payoutAddress).transfer(raised);
        raised = 0;
    }

    function refund() public {
        require(block.timestamp >= deadline, "Refunds are only allowed after deadline.");
        require(raised < goal, "Goal has been reached.");
        require(donors[msg.sender], "Only donors can request a refund.");
        
        uint amount = donations[msg.sender];
        donations[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}