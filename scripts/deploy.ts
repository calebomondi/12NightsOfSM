import { ethers } from 'hardhat';

async function main() {
  const mockERC20Token = await ethers.deployContract('MockERC20');

  await mockERC20Token.waitForDeployment();

  console.log('NFT Contract Deployed at ' + mockERC20Token.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});