const hre = require("hardhat");

async function main() {
  const CarrotsMiner = await hre.ethers.getContractFactory("CarrotsMiner");
  console.log("Deploying...");
  const miner = await CarrotsMiner.deploy();
  await miner.deployed();
  console.log(`Contract address: ${miner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x048e76d7e243dff27c78d380c5323ab65bb5155b
