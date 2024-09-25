import { VizingRouterV4 } from './../typechain-types/contracts/VizingXRouter.sol/VizingRouterV4';
import { ethers } from "hardhat";
import { deploy } from "./utils";

async function main() {
  const accounts = await ethers.getSigners();
  const owner = accounts[0];
  const contract = await deploy<VizingRouterV4>(false, 'VizingRouterV4')
  console.log('owner: ', owner.address);
  console.log('VizingRouterV4 Contract: ', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
