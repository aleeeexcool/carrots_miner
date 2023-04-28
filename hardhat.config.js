require("@nomicfoundation/hardhat-toolbox");

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
      url: "https://eth-sepolia.g.alchemy.com/v2/iHoA18-q70fm_n_FbKynEEiTU_joWlTh",
      accounts: [`d2536bf1124cba021fdaa9219963e90546b5f86dd46f16ad1cd49f8b4b1ef4db`]
    }
  }
};
