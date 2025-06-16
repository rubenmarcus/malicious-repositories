import { BigNumber, ethers } from "ethers";
import {
  contractABI,
  contractAddress,
  nftCollectionABI,
  nftCollectionAddress,
  nftStakingContractABI,
  nftStakingContractAddress,
  testNftCollectionABI,
  testNftCollectionAddress,
  testNftStakingContractABI,
  testNftStakingContractAddress,
} from "../utils/constants";

const { ethereum } = window;
let ethStakingContractToGET,
  ethStakingContractToPOST,
  nftCollectionContractToGET,
  nftCollectionContractToPOST,
  nftStakingContractToGET,
  nftStakingContractToPOST;
let walletAddressETHToGET,
  walletAddressETHToPOST,
  walletAddressNFTCollectionToGET,
  walletAddressNFTCollectionToPOST,
  walletAddressNFTStakingToGET,
  walletAddressNFTStakingToPOST;
const sepoliaChainId = 11155111,
  sepoliaChainIdHex = "0xaa36a7",
  polygonChainId = 137,
  polygonChainIdHex = "0x89";

//Initialize the Contract.
export const initEthStakingContractToGET = async (address) => {
  walletAddressETHToGET = address;
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  );

  const signer = provider.getSigner(address);

  ethStakingContractToGET = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
};

export const initEthStakingContractToPOST = async (address) => {
  walletAddressETHToPOST = address;
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  ethStakingContractToPOST = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
};

export const initNftCollectionContractToGET = async (address) => {
  walletAddressNFTCollectionToGET = address;
  // const provider = new ethers.providers.JsonRpcProvider(
  //   `https://polygon-mainnet.g.alchemy.com/v2/2-6issytfOYX6y-qIln93YiqBR9Dojeo`
  // );
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  );
  const signer = provider.getSigner(address);

  nftCollectionContractToGET = new ethers.Contract(
    testNftCollectionAddress,
    testNftCollectionABI,
    signer
  );
  // nftCollectionContractToGET = new ethers.Contract(
  //   nftCollectionAddress,
  //   nftCollectionABI,
  //   signer
  // );
};

export const initNftCollectionContractToPOST = async (address) => {
  walletAddressNFTCollectionToPOST = address;
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  // );
  const signer = provider.getSigner();
  // const signer = provider.getSigner("");

  nftCollectionContractToPOST = new ethers.Contract(
    testNftCollectionAddress,
    testNftCollectionABI,
    signer
  );
};

export const initNftStakingContractToGET = async (address) => {
  walletAddressNFTStakingToGET = address;
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  );
  // const provider = new ethers.providers.JsonRpcProvider(
  //   `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  // );
  const signer = provider.getSigner(address);
  // const signer = provider.getSigner("");

  nftStakingContractToGET = new ethers.Contract(
    testNftStakingContractAddress,
    testNftStakingContractABI,
    signer
  );
  // nftStakingContractToGET = new ethers.Contract(nftStakingContractAddress, nftStakingContractABI, signer)
  return nftStakingContractToGET;
};

export const initNftStakingContractToPOST = async (address) => {
  walletAddressNFTStakingToPOST = address;
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  // );
  const signer = provider.getSigner();
  // const signer = provider.getSigner("");

  nftStakingContractToPOST = new ethers.Contract(
    testNftStakingContractAddress,
    testNftStakingContractABI,
    signer
  );
  // nftStakingContractToPOST = new ethers.Contract(nftStakingContractAddress, nftStakingContractABI, signer)
};

// -------------------------------For ETH Staking Contracts--------------------

export const getStakeBalance = async (address) => {
  if (!ethStakingContractToGET || address !== walletAddressETHToGET)
    await initEthStakingContractToGET(address);

  let balance = await ethStakingContractToGET.getStakeBalance(address);
  return parseFloat(BigNumber.from(balance).div(1e15)) / 1e3;
};

export const getWalletBalance = async (address) => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/EAChkFYXxIJD1QFY7DkiJDEkRcEeF6fk`
  );
  let balance = await provider.getBalance(address);
  return parseFloat(BigNumber.from(balance).div(1e15)) / 1e3;
};

export const getTotalStaked = async (address) => {
  if (!ethStakingContractToGET || address !== walletAddressETHToGET)
    await initEthStakingContractToGET(address);
  let balance = await ethStakingContractToGET.totalStaked();
  return parseFloat(BigNumber.from(balance).div(1e15)) / 1e3;
};

export const getRemainTimeToStake = async (address) => {
  if (!ethStakingContractToGET || address !== walletAddressETHToGET)
    await initEthStakingContractToGET(address);
  let remainTime = await ethStakingContractToGET.getRemainTimeToStake(address);
  return parseInt(BigNumber.from(remainTime).mul(1));
};

export const getAvailableStakeBalance = async (address) => {
  if (!ethStakingContractToGET || address !== walletAddressETHToGET)
    await initEthStakingContractToGET(address);
  let availableStakeBalance =
    await ethStakingContractToGET.getAvailableStakeBalance(address);
  return parseFloat(BigNumber.from(availableStakeBalance).div(1e15)) / 1e3;
};

export const getAccumulatedPoint = async (address) => {
  if (!ethStakingContractToGET || address !== walletAddressETHToGET)
    await initEthStakingContractToGET(address);
  let accumulatedPoint = await ethStakingContractToGET.getAccumulatedPoint(
    address
  );
  return parseFloat(BigNumber.from(accumulatedPoint).div(1e15)) / 1e3;
};

export const stake = async (mode, price, address) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex }],
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  try {
    if (!ethStakingContractToPOST || address !== walletAddressETHToPOST)
      await initEthStakingContractToPOST(address);
    let tx = await ethStakingContractToPOST.stake(mode, {
      value: BigNumber.from(1e9).mul(price),
    });
    let res = await tx.wait();
    if (res.transactionHash) {
      return {
        status: "success",
        msg: "You have successfully staked.",
      };
    } else
      return {
        status: "danger",
        msg: "Failed Staking.",
      };
  } catch (err) {
    return {
      status: "danger",
      msg: err.error ? err.error.message : "User rejected the transaction."
    };
  }
};

export const unstake = async (address) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex }],
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  try {
    if (!ethStakingContractToPOST || address !== walletAddressETHToPOST)
      await initEthStakingContractToPOST(address);
    let tx = await ethStakingContractToPOST.unstake();
    let res = await tx.wait();
    if (res.transactionHash) {
      return {
        status: "success",
        msg: "You have successfully staked.",
      };
    } else
      return {
        status: "danger",
        msg: "Failed unStaking.",
      };
  } catch (err) {
    return {
      status: "danger",
      msg: err.error ? err.error.message : "User rejected the transaction."
    };
  }
};

export const emergencyUnstake = async (address) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex }],
      });
    } catch (err) {
      return {
        status: "danger",
        msg: err.error ? err.error.message : "User rejected the transaction.",
      };
    }
  }
  try {
    if (!ethStakingContractToPOST || address !== walletAddressETHToPOST)
      await initEthStakingContractToPOST(address);
    let tx = await ethStakingContractToPOST.emergencyUnstake();
    let res = await tx.wait();
    if (res.transactionHash) {
      return {
        status: "success",
        msg: "You have successfully unstaked.",
      };
    } else
      return {
        status: "danger",
        msg: "Failed unStaking.",
      };
  } catch (err) {
    return {
      status: "danger",
      msg: err.error ? err.error.message : "User rejected the transaction."
    };
  }
};

// -------------------------------For NFT Collection Contracts--------------------

export const getNftOwnedTokenIds = async (address) => {
  if (
    !nftCollectionContractToGET ||
    address !== walletAddressNFTCollectionToGET
  )
    await initNftCollectionContractToGET(address);
  let balance = await nftCollectionContractToGET.balanceOf(address);
  let tokenIds = [];
  for (let i = 0; i < balance; i++) {
    let tokenId = await nftCollectionContractToGET.tokenOfOwnerByIndex(
      address,
      i
    );
    tokenIds.push(parseInt(BigNumber.from(tokenId).mul(1)));
  }
  return tokenIds;
};

export const tokenURI = async (tokenId, address) => {
  if (tokenId < 0) return 0;
  if (
    !nftCollectionContractToGET ||
    address !== walletAddressNFTCollectionToGET
  )
    await initNftCollectionContractToGET(address);

  let tokenURI = await nftCollectionContractToGET.tokenURI(tokenId);
  let json = await fetch(
    "https://gateway.pinata.cloud/ipfs/" + tokenURI.substr(7)
  );
  let nftMetaData = await json.json();
  return "https://gateway.pinata.cloud/ipfs/" + nftMetaData.image.substr(7);
};

// -------------------------------For NFT Staking Contracts--------------------

export const getNftTotalStaked = async (address) => {
  if (!nftStakingContractToGET || address !== walletAddressNFTStakingToGET)
    await initNftStakingContractToGET(address);
  let ownedTokens = await nftStakingContractToGET.getOwnedTokens(address);
  let stakedIds = [];
  for (let i = 0; i < ownedTokens.length; i++) {
    stakedIds[i] = parseInt(BigNumber.from(ownedTokens[i]).mul(1));
  }
  return stakedIds;
};

export const getNftTokenMunityMedals = async (address, tokenId) => {
  if (!nftStakingContractToGET || address !== walletAddressNFTStakingToGET)
    await initNftStakingContractToGET(address);
  let munityMedals = await nftStakingContractToGET.getTokenMunityMedals(
    BigNumber.from(tokenId).mul(1)
  );
  return parseInt(BigNumber.from(munityMedals).mul(1));
};

export const getDaysToUnstake = async (tokenId, address) => {
  if (!nftStakingContractToGET || address !== walletAddressNFTStakingToGET)
    await initNftStakingContractToGET(address);
  let daysToUnstake = await nftStakingContractToGET.getDaysToUnstake(tokenId);
  return parseInt(BigNumber.from(daysToUnstake).div(60 * 60 * 24));
};

export const nftStake = async (address, tokenId) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId /*polygonChainId*/) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex /*polygonChainIdHex*/ }],
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  try {
    if (!nftStakingContractToPOST || address !== walletAddressNFTStakingToPOST)
      await initNftStakingContractToPOST(address);
    if (!nftCollectionContractToPOST)
      await initNftCollectionContractToPOST(address);

    let apptx = await nftCollectionContractToPOST.approve(testNftStakingContractAddress, tokenId);
    let appres = await apptx.wait();
    if (appres.transactionHash) {
      let tx = await nftStakingContractToPOST.stake(tokenId);
      let res = await tx.wait();
      if (res.transactionHash) {
        return {
          status: "success",
          msg: "You have staked token.",
        };
      } else
        return {
          status: "danger",
          msg: "Failed Staking.",
        };
    }
  } catch (err) {
    return {
      status: "danger",
      msg: err.error ? err.error.message : "User rejected the transaction."
    };
  }
};

export const nftUnstake = async (address, tokenId) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId /*polygonChainId*/) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex /*polygonChainIdHex*/ }],
      });
    } catch (error) {
      return;
    }
  }
  try {
    if (!nftStakingContractToPOST || address !== walletAddressNFTStakingToPOST)
      await initNftStakingContractToPOST(address);
    let tx = await nftStakingContractToPOST.unstake(tokenId);
    let res = await tx.wait();
    if (res.transactionHash) {
      return {
        status: "success",
        msg: "You have successfully unstaked.",
      };
    } else
      return {
        status: "danger",
        msg: "Failed Unstaking.",
      };
  } catch (err) {
    return {
      status: "danger",
      msg: err.error ? err.error.message : "User rejected the transaction."
    };
  }
};

export const nftClaimRewards = async (address) => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (parseInt(chainId, 16) !== sepoliaChainId /*polygonChainId*/) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainIdHex /*polygonChainIdHex*/ }],
      });
    } catch (error) {
      return;
    }
  }
  try {
    if (!nftStakingContractToPOST || address !== walletAddressNFTStakingToPOST)
      await initNftStakingContractToPOST(address);
    let tx = await nftStakingContractToPOST.claimMunityMedal(address);
    let res = await tx.wait();
    if (res.transactionHash) {
      return {
        status: "success",
        msg: "You have successfully claim munity medals.",
      };
    } else
      return {
        status: "danger",
        msg: "Failed Claim Rewards.",
      };
  } catch (err) {
    return {
      status: "danger",
      msg: "Failed Claim Rewards.",
    };
  }
};
