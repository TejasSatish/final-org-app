require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL=process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    sepolia:{
      url:SEPOLIA_RPC_URL,
      accounts:[PRIVATE_KEY],
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
    },
  },
  etherscan:{
    apiKey:ETHERSCAN_API_KEY,
  },
  gasResporter:{
    enabled:true,  
  },
  solidity: "0.8.9",
};
