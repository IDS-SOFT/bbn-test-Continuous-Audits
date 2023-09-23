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
