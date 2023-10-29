const {ethers, run, network}=require("hardhat");

async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  

  const transactionResponse1 = await simpleStorage.createNewDonor("1","Tejas",19,"Chennai-Navalur","Bpos","kidney","10.5","18","kamatchi");
  await transactionResponse1.wait(1);
  const transactionResponse2 = await simpleStorage.createNewRecipient("2","T",15,"i-Navalur","Bpos","kidney","10.6","kamatchi");
  await transactionResponse2.wait(1);
  

  const updatedDonors1 = await simpleStorage.retrieveDonors();
  const updatedRecipients1 = await simpleStorage.retrieveRecipients();

  console.log(`Updated Donor list: ${updatedDonors1}`);
  console.log(`Updated Recipients list: ${updatedRecipients1}`);

  const transactionResponse3 = await simpleStorage.removeRecipient("2");
  await transactionResponse3.wait(1);
  


  const updatedDonors2 = await simpleStorage.retrieveDonors();
  const updatedRecipients2 = await simpleStorage.retrieveRecipients();

  console.log(`Updated Donor list: ${updatedDonors2}`);
  console.log(`Updated Recipients list: ${updatedRecipients2}`);
}



main().then(()=>process.exit(0)).catch((error)=>{
  console.error(error);
  process.exit(1);
});
