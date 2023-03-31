pragma solidity ^0.8.0;

contract Donation {
    address public constant recipient = 0x123...; // Replace with your own wallet address
    
    mapping(address => uint256) public donations;
    
    event DonationReceived(address donor, uint amount);
    
    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        donations[msg.sender] += msg.value;
        payable(recipient).transfer(msg.value);
        emit DonationReceived(msg.sender, msg.value);
    }
    
    function getDonation(address donor) external view returns (uint256) {
        return donations[donor];
    }
}