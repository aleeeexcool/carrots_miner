const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("CarrotsMiner", function () {
    let CarrotsMiner, miner, owner, nonOwner;

    beforeEach(async () => {
        [owner, nonOwner] = await ethers.getSigners();
        CarrotsMiner = await ethers.getContractFactory("CarrotsMiner");
        miner = await CarrotsMiner.deploy();
        await miner.deployed();
    });

    it("should deploy with the right owner", async () => {
        expect(await miner.owner()).to.equal(owner.address);
    });
})