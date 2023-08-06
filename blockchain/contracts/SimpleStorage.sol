// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract SimpleStorage{
    //mappings work like dictionaries, there is no need for them in our project
    
    struct OrganDonor{
        string name;
        uint104 age;
        string locality;
        string bloodType;
        string organ;
        string organLife; //how long the organ is good for
        string hospitalName;
        //uint256 hehe;
    }
    
    struct OrganRecipient{
        string name;
        uint104 age;
        string locality;
        string bloodType;
        string organ;
        string hospitalName;
        //uint256 hehe;
    }

    OrganDonor[] public donors;
    OrganRecipient[] public recipients;
    function createNewDonor(string memory _name, uint104 _age, string memory _locality,string memory _bloodtype, string memory _organ, string memory _organLife, string memory _hospitalName)public{
    //function createNewDonor(uint256 _hehe)public{
        donors.push(OrganDonor(_name,_age,_locality,_bloodtype,_organ,_organLife,_hospitalName)); //creating a donor object and pushing to array
        //donors.push(OrganDonor(_hehe));
    }

    function retrieveDonors() public view returns (OrganDonor[] memory){
        return donors;//stopped at 12:32:32
    }

    function createNewRecipient(string memory _name, uint104 _age, string memory _locality,string memory _bloodtype, string memory _organ, string memory _hospitalName)public{
    //function createNewDonor(uint256 _hehe)public{
        recipients.push(OrganRecipient(_name,_age,_locality,_bloodtype,_organ,_hospitalName)); //creating a donor object and pushing to array
        //donors.push(OrganDonor(_hehe));
    }

    function retrieveRecipients() public view returns (OrganRecipient[] memory){
        return recipients;
    }
}