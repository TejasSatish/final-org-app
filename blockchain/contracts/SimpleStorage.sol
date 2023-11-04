// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract SimpleStorage{
    //mappings work like dictionaries, there is no need for them in our project
    
    struct OrganDonor{
        uint256 id;
        string name;
        uint104 age;
        string gender;
        string locality;
        string bloodType;
        string tissueType;
        string organ;
        string organSize;
        string organLife; //how long the organ is good for
        string hospitalName;
    }
    
    struct OrganRecipient{
        uint256 id;
        string name;
        uint104 age;
        string gender;
        string locality;
        string bloodType;
        string tissueType;
        string organ;
        string organSize;
        string hospitalName;
    }

    // Event to log when an item is added.
    event DonorAdded(uint256 id,string name,uint104 age,string gender,string locality,string bloodType,string tissueType,string organ,string organSize,string organLife,string hospitalName);
    event RecipientAdded(uint256 id,string name,uint104 age,string gender,string locality,string bloodType,string tissueType,string organ,string organSize,string hospitalName);

    // Event to log when an item is removed.
    event DonorRemoved(uint256 id,string name,uint104 age,string gender,string locality,string bloodType,string tissueType,string organ,string organSize,string organLife,string hospitalName);
    event RecipientRemoved(uint256 id,string name,uint104 age,string gender,string locality,string bloodType,string tissueType,string organ,string organSize,string hospitalName);

    // Event to log when arrays are cleared.
    event DonorsCleared();
    event RecipientsCleared();

    OrganDonor[] public donors;
    OrganRecipient[] public recipients;
    function createNewDonor(uint256 _id,string memory _name, uint104 _age,string memory _gender, string memory _locality,string memory _bloodtype,string memory _tissueType, string memory _organ, string memory _organSize,string memory _organLife, string memory _hospitalName)public{
    
        donors.push(OrganDonor(_id,_name,_age,_gender,_locality,_bloodtype,_tissueType,_organ,_organSize,_organLife,_hospitalName)); //creating a donor object and pushing to array
        emit DonorAdded(_id,_name,_age,_gender,_locality,_bloodtype,_tissueType,_organ,_organSize,_organLife,_hospitalName);
        
    }

    function createNewRecipient(uint256 _id,string memory _name, uint104 _age,string memory _gender, string memory _locality,string memory _bloodtype,string memory _tissueType, string memory _organ,string memory _organSize, string memory _hospitalName)public{
    
        recipients.push(OrganRecipient(_id,_name,_age,_gender,_locality,_bloodtype,_tissueType,_organ,_organSize,_hospitalName)); //creating a donor object and pushing to array
        emit RecipientAdded(_id,_name,_age,_gender,_locality,_bloodtype,_tissueType,_organ,_organSize,_hospitalName);
        
    }

    function removeDonor(uint256 _id) public{
        uint256 indexToRemove = findDonorIndexById(_id);
        require(indexToRemove < donors.length, "Struct not found");
        
        OrganDonor memory donorToRemove = donors[indexToRemove];
        OrganDonor memory lastDonor = donors[donors.length - 1];

        donors[indexToRemove] = lastDonor;
        donors.pop();
        emit DonorRemoved(donorToRemove.id, donorToRemove.name, donorToRemove.age,donorToRemove.gender, donorToRemove.locality, donorToRemove.bloodType, donorToRemove.tissueType,donorToRemove.organ,donorToRemove.organSize, donorToRemove.organLife, donorToRemove.hospitalName);
    }

    function findDonorIndexById(uint256 _id) internal view returns (uint256) {
        for (uint256 i = 0; i < donors.length; i++) {
            if (donors[i].id == _id) {
                return i;
            }
        }
        return type(uint).max; // Not found
    }

    function removeRecipient(uint256 _id) public{
        uint256 indexToRemove = findRecipientIndexById(_id);
        require(indexToRemove < recipients.length, "Struct not found");
        
        OrganRecipient memory recipientToRemove = recipients[indexToRemove];
        OrganRecipient memory lastRecipient = recipients[recipients.length - 1];

        recipients[indexToRemove] = lastRecipient;
        recipients.pop();
        emit RecipientRemoved(recipientToRemove.id, recipientToRemove.name, recipientToRemove.age, recipientToRemove.gender, recipientToRemove.locality, recipientToRemove.bloodType,recipientToRemove.tissueType, recipientToRemove.organ, recipientToRemove.organSize, recipientToRemove.hospitalName);
    }

    function findRecipientIndexById(uint256 _id) internal view returns (uint256) {
        for (uint256 i = 0; i < recipients.length; i++) {
            if (recipients[i].id == _id) {
                return i;
            }
        }
        return type(uint).max; // Not found
    }


    function retrieveDonors() public view returns (OrganDonor[] memory){
        return donors;
    }

    function retrieveRecipients() public view returns (OrganRecipient[] memory){
        return recipients;
    }

    function resetAll() public {
         uint256 dLength=donors.length;
         uint256 rLength=recipients.length;

         for(uint256 i=0;i<dLength;i++){
            delete donors[i];
         }

         for(uint256 i=0;i<rLength;i++){
            delete recipients[i];
         }

         emit DonorsCleared();
         emit RecipientsCleared();
    }
}