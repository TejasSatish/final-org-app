const {ethers, run, network}=require("hardhat");

async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying...");
  const simpleStorage= await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  console.log(`Deployed contract to ${await simpleStorage.getAddress()}`);
  if(network.config.chainId===11155111 && process.env.ETHERSCAN_API_KEY){
    await simpleStorage.deploymentTransaction.waitForDeployment(6);
    await verify(simpleStorage.address,[]);
  }

  const donors= await simpleStorage.retrieveDonors();
  const recipients= await simpleStorage.retrieveRecipients();
  console.log(`Donor list: ${donors}`);
  console.log(`Recipient list: ${recipients}`);

  const transactionResponse1 = await simpleStorage.createNewDonor("Tejas",19,"Chennai-Navalur","Bpos","kidney","18","kamatchi");
  await transactionResponse1.wait(1);
  const transactionResponse2 = await simpleStorage.createNewDonor("Aditya",20,"Hyderbad","Bpos","brain","1","idk");
  await transactionResponse2.wait(1);
  const transactionResponse3 = await simpleStorage.createNewRecipient("Aditya",19,"Uththandi","Bpos","teeth","kamatchi");
  await transactionResponse3.wait(1);
  const transactionResponse4 = await simpleStorage.createNewRecipient("Alex",20,"Uththandi","Bpos","ankles","idk");
  await transactionResponse4.wait(1);

  const updatedDonors = await simpleStorage.retrieveDonors();
  const updatedRecipients = await simpleStorage.retrieveRecipients();
  console.log(`Updated Donor list: ${updatedDonors}`);
  console.log(`Updated Recipients list: ${updatedRecipients}`);
}

async function verify(contractAddress, args){
  console.log("Verifing...");

  try {
    await run("verify:verify",{
      address:contractAddress,
      constructorArguments:[],
    });  
  } catch (error) {
    if(error.msg.toLowerCase().includes("already verified")){
      console.log("already verified");
    }else{
      console.log(error);
    }
  }
}

main().then(()=>process.exit(0)).catch((error)=>{
  console.error(error);
  process.exit(1);
});
