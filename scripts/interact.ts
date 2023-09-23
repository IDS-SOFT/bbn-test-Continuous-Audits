import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import { ethers, providers } from "ethers";
const hre = require("hardhat");
const ContinuousAudits = require("./../artifacts/contracts/Continuous_Audits.sol/ContinuousAudits.json");
//const ContinuousAudits = require("./../artifacts/contracts/Continuous_Audits.sol/Lock.json");

const contractAddress: string = process.env.CONTRACT_ADDRESS || "";
const contractABI: any[] = ContinuousAudits.abi;

async function main() {
//   const provider = new ethers.JsonRpcProvider(process.env.RPC_NODE_URL || "");
const provider = new providers.JsonRpcProvider(process.env.RPC_NODE_URL || "");  
const signer = await hre.ethers.getSigner("0x70997970C51812dc3A010C7d01b50e0d17dc79C8",353,123);
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    // Call functions here
    const createContract = await contract.createAudit(234,353,123);
  await createContract.wait();
  console.log("product created");
  console.log("The transaction hash is:", createContract.hash);
  const receipt = await createContract.wait();
  console.log(
    "The transaction returned the following transaction receipt:\n",
    receipt,
  );
  
  } catch (error) {
    console.error("Error:", error);
  }
}

main();