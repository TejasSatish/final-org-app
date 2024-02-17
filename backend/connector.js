require('dotenv').config()
const { Web3 } = require(`web3`)
const constants=require(`./constants/constants.js`)

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.SEPOLIA_RPC_URL))
const wallet = web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);
const contract = web3.eth.Contract(constants.abi,constants.sepoliaContractAddress);
const deleteAllData= async ()=>{
    const transactionObject = {
        from: wallet,
        gas: gasLimit,
        gasPrice: gasPriceInWei
      };

    console.log(`connecting using RPC URL ${process.env.SEPOLIA_RPC_URL}`)
    var result
    try{
        result = await contract.methods.resetAll().call((err,res)=>{
            if (!err) {
                console.log("Result of myFunction: ", res);
            } else {
                console.error("Error calling myFunction: ", err);
            }
        });
    }catch(e){
        console.log('some error')
    }
    return res;
}


module.exports={
    deleteAllData
}
