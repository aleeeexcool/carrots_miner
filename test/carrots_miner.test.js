const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("CarrotsMiner", function () {
    let CarrotsMiner, carrot, owner, nonOwner;

    beforeEach(async () => {
        [owner, nonOwner] = await ethers.getSigners();
        CarrotsMiner = await ethers.getContractFactory("CarrotsMiner");
        carrot = await CarrotsMiner.deploy();
        await carrot.deployed();
    });

    it("should deploy with the right owner", async () => {
        expect(await carrot.owner()).to.equal(owner.address);
    });

    it("should return the right balance when user call the getBalance function", async () => {
        expect(await carrot.getBalance()).to.equal(0);
    });
})