import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect } from "react";

import HeaderIconR1 from "../images/HeaderIconR1.svg";
import HeaderIconR2 from "../images/HeaderIconR2.svg";
import { NonceTooLowError } from "viem";
export const Wallnetbtn = () => {
  const { isConnecting, isDisconnected } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainID) => {
        if (
          !(
            chainID == 5 ||
            chainID == 11155111 ||
            chainID == 1 ||
            chainID == 137
          )
        )
          disconnect();
      });
      // window.ethereum.on("accountsChanged", () => {
      //   window.location.reload();
      // });
    }
  });

  return (
    <div className="another">
      {!isConnecting && !isDisconnected ? (
        <div>
          <div className="wallnetBtn" onClick={() => open()}>
            Disconnect
          </div>
        </div>
      ) : (
        <div className="topBarBtn">
          {/* <div
            className="tabButton colorloginBtn"
            onClick={() => {
              alert("Login");
            }}
          >
            Login
          </div> */}
          <div className="tabButton colortabBtn" onClick={() => open()}>
            Connect Wallet
          </div>
        </div>
      )}
    </div>
  );
};
