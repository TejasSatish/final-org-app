const {ethers, run, network}=require("hardhat");
const fs = require('fs');
var path = require("path");


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

  const SSJson=JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'artifacts', 'contracts','SimpleStorage.sol','SimpleStorage.json'), 'utf8'));
  const abi={
    "abi" : SSJson.abi
  }
  
  fs.writeFileSync(path.join(__dirname, '..','..', 'frontend', 'src','constants','abi.json'), JSON.stringify(abi),'utf8',()=>{})
  // const donors= await simpleStorage.retrieveDonors();
  // const recipients= await simpleStorage.retrieveRecipients();
  // console.log(`Donor list: ${donors}`);
  // console.log(`Recipient list: ${recipients}`);

  // const transactionResponse1 = await simpleStorage.createNewDonor("1","Tejas",19,"Chennai-Navalur","Bpos","kidney","10.5","18","kamatchi");
  // await transactionResponse1.wait(1);
  // const transactionResponse2 = await simpleStorage.createNewRecipient("2","T",15,"i-Navalur","Bpos","kidney","10.6","kamatchi");
  // await transactionResponse2.wait(1);
  

  // const updatedDonors1 = await simpleStorage.retrieveDonors();
  // const updatedRecipients1 = await simpleStorage.retrieveRecipients();

  // console.log(`Updated Donor list: ${updatedDonors1}`);
  // console.log(`Updated Recipients list: ${updatedRecipients1}`);

  // const transactionResponse3 = await simpleStorage.removeRecipient("2");
  // await transactionResponse3.wait(1);
  


  // const updatedDonors2 = await simpleStorage.retrieveDonors();
  // const updatedRecipients2 = await simpleStorage.retrieveRecipients();

  // console.log(`Updated Donor list: ${updatedDonors2}`);
  // console.log(`Updated Recipients list: ${updatedRecipients2}`);
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
