/*// Import the ethers library from Hardhat
import { ethers } from "hardhat";

// Import the hardhat library and assign it to the variable "hre"
const hre = require("hardhat");

// Define an asynchronous function called "main"
async function main() {
  // Retrieve the Deployer's address
  const [Deployer] = await hre.ethers.getSigners(); 

  // Log the Deployer's address to the console
  console.log("ContinuousAudits deployed to:", Deployer.address);

  // Deploy the "ContinuousAudits" contract
  const ContinuousAudits = await ethers.getContractFactory("ContinuousAudits");
  const continuousAudits = await ContinuousAudits.deploy();
  await continuousAudits.waitForDeployment();

  // Log the contract address to the console
  console.log("ContinuousAudits deployed to:", (continuousAudits as any).address);

  // Store the contract addresses for later use
  const addresses = {
    ContinuousAudits: continuousAudits,
  };

  // Store the contract addresses in a JSON file for easy access
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Contract addresses written to deployedAddresses.json");
}

// Call the "main" function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  */
  import { ethers } from "hardhat";
  const hre = require("hardhat");

  async function main() {
    const [Deployer] = await hre.ethers.getSigners(); 
    console.log("ContinuousAudits deployed to:", Deployer.address);

    const ContinuousAudits = await ethers.getContractFactory("ContinuousAudits");
    const continuousAudits = await ContinuousAudits.deploy();
    console.log("ContinuousAudits deployed to:", (continuousAudits as any).address);

    const addresses = {
      ContinuousAudits: continuousAudits,
    };
    const fs = require("fs");
    fs.writeFileSync("deployedAddresses.json", JSON.stringify(addresses, null, 2));
    console.log("Contract addresses written to deployedAddresses.json");
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });