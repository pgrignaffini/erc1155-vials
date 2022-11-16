import { ethers } from "hardhat";

export const baseURI = "https://myURI.com/"

async function main() {

  const Vial = await ethers.getContractFactory("Vial");
  const vial = await Vial.deploy(baseURI);

  await vial.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
