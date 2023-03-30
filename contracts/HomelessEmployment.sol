// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HomelessEmployment {
    struct Job {
        uint id;
        address employer;
        string title;
        string description;
        uint duration;
        uint pay;
        bool filled;
        address worker;
    }

    mapping (uint => Job) public jobs;
    uint public jobCount;

    event JobCreated(uint indexed id, address indexed employer, string title, string description, uint duration, uint pay);
    event JobFilled(uint indexed id, address indexed worker);

    function createJob(string memory _title, string memory _description, uint _duration, uint _pay) public returns (uint) {
        require(_duration > 0, "Duration must be greater than 0");
        require(_pay > 0, "Pay must be greater than 0");

        jobCount++;
        jobs[jobCount] = Job(jobCount, msg.sender, _title, _description, _duration, _pay, false, address(0));
        emit JobCreated(jobCount, msg.sender, _title, _description, _duration, _pay);
        return jobCount;
    }

    function fillJob(uint _id) public {
        require(_id > 0 && _id <= jobCount, "Invalid job ID");
        Job storage job = jobs[_id];
        require(!job.filled, "Job is already filled");

        job.filled = true;
        job.worker = msg.sender;
        emit JobFilled(_id, msg.sender);
    }
}