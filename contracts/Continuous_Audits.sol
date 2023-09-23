//SPDX-License-Identifier:GLP-3.0

pragma solidity ^0.8.0;

contract ContinuousAudits {
    // Define variables
    address public owner;
    string public auditName;
    string public auditDescription;
    uint public auditValue;

    // Define events
    event AuditCreated(address indexed user, string indexed auditName, uint indexed auditValue);
    event AuditUpdated(address indexed user, string indexed auditName, uint indexed auditValue);
    event AuditDeleted(address indexed user);

    // Constructor function
    constructor() {
        owner = msg.sender;
        auditName = "";
        auditDescription = "";
        auditValue = 0;
    }

    // Function to create audit
    function createAudit(string memory _auditName, string memory _auditDescription, uint _auditValue) public {
        require(msg.sender == owner, "Only owner can create audit");
        auditName = _auditName;
        auditDescription = _auditDescription;
        auditValue = _auditValue;
        emit AuditCreated(msg.sender, auditName, auditValue);
    }

    // Function to update audit
    function updateAudit(string memory _auditName, string memory _auditDescription, uint _auditValue) public {
        require(msg.sender == owner, "Only owner can update audit");
        auditName = _auditName;
        auditDescription = _auditDescription;
        auditValue = _auditValue;
        emit AuditUpdated(msg.sender, auditName, auditValue);
    }

    // Function to delete audit
    function deleteAudit() public {
        require(msg.sender == owner, "Only owner can delete audit");
        auditName = "";
        auditDescription = "";
        auditValue = 0;
        emit AuditDeleted(msg.sender);
    }
}