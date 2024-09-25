import { ethers } from "hardhat";
import { deploy } from "./utils";
import { VizingXRouter } from "../typechain-types/contracts/VizingXRouter.sol";

async function main() {
  const accounts = await ethers.getSigners();
  const owner = accounts[0];

  const contract = await deploy<VizingXRouter>(false, 'VizingXRouter')
  console.log('owner: ', owner.address);
  console.log('VizingXRouter Contract: ', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
