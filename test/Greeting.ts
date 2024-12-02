import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeting", function () {
  async function deployContract() {
    const Greeting = await ethers.getContractFactory("Greeting");
    const contract = await Greeting.deploy("Hello World");
    return contract;
  }

  it("Initial message is set correctly", async function () {
    const contract = await deployContract();
    const message = await contract.getMessage();
    expect(message).to.equal("Hello World");
  });

  it("Can change message", async function () {
    const contract = await deployContract();
    await contract.setMessage("New Message");
    const message = await contract.getMessage();
    expect(message).to.equal("New Message");
  });
});