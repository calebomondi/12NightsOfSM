import { ethers } from "hardhat";

async function main() {
  const Greeting = await ethers.getContractFactory("Greeting");
  
  const contract = await Greeting.deploy("Hello World!");
  
  await contract.deploymentTransaction()?.wait();
  
  console.log(`Contract deployed to: ${await contract.getAddress()}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});