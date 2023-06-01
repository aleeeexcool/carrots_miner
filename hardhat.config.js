require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 2000
        }
      }
  },
  networks: {
    sepolia: {
      url: "",
      accounts: [``]
    }
  },
  etherscan: {
    apiKey: ""
  }
};
