import { Content } from "./Content";
import { FundingContext } from "./FundingContext";
import { Header } from "./Header";
import "./styleWalletbtn.css";
import "./styleMunityjoin.css";
import "./styleTabcontrol.css";
import "./styleEthereumModal.css";
import "./styleNfts.css";
import "./styleSlideModal.css";
import "./styleSlide.css";
import "./styleAvailablestaked.css";
import "./styleStakeSettingModal.css";
import "./styleHamburger.css";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  getNftOwnedTokenIds,
  getNftTotalStaked,
  tokenURI,
} from "../utils/Contract";
export const Funding = () => {
  const { address } = useAccount();
  const [availableNfts, setAvailableNfts] = useState([]);
  const [stakedNfts, setStakedNfts] = useState([]);
  const [availableNftIds, setAvailableNftIds] = useState([]);
  const [stakedNftIds, setStakedNftIds] = useState([]);
  const [isStaked, setIsStaked] = useState([]);
  const [tokenId, setTokenId] = useState(0);
  const [currentStaked, setCurrentStaked] = useState(false);

  const resetTokenID = (tokenId) => {
    setTokenId(tokenId);
  }
  const resetCurrentStaked = (tokenId) => {
    setCurrentStaked(tokenId);
  }

  useEffect(() => {
    (async () => {
      if (!address) return;
      let tokenIds = await getNftOwnedTokenIds(address);
      let stakedIds = await getNftTotalStaked(address);

      if (tokenIds.length === 0) {
        setTokenId(stakedIds[0]);
        setCurrentStaked(true);
      } else {
        setTokenId(tokenIds[0]);
        setCurrentStaked(false);
      }

      setAvailableNftIds(tokenIds);
      setStakedNftIds(stakedIds);

      let images = [],
        staked = [];
      for (let i = 0; i < tokenIds.length; i++) {
        let imageUrl = await tokenURI(tokenIds[i], address);
        images.push(imageUrl);
        staked.push(false);
      }
      setAvailableNfts(images);
      images = [];
      for (let i = 0; i < stakedIds.length; i++) {
        let imageUrl = await tokenURI(stakedIds[i], address);
        images.push(imageUrl);
        staked.push(true);
      }
      setStakedNfts(images);
      setIsStaked(staked);
    })();
  }, [address]);

  return (
    <div>
      <FundingContext.Provider
        value={{
          activeBtn: "left",
          connect: "false",
          isStaked: isStaked,
          availableNftIds: availableNftIds,
          availableNfts: availableNfts,
          stakedNftIds: stakedNftIds,
          stakedNfts: stakedNfts,
          tokenId: tokenId,
          resetTokenID: resetTokenID,
          currentStaked: currentStaked,
          resetCurrentStaked: resetCurrentStaked,
        }}
      >
        <Header />
        <Content />
      </FundingContext.Provider>
    </div>
  );
};
