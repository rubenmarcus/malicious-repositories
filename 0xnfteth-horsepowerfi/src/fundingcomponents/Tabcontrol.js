import React, { useState, useEffect } from "react";
import { EthereumModal } from "./EthereumModal";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import walletIcon from "../images/Wallet.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Tabcontrol = () => {
  const [activeBtn, setActiveBtn] = useState("right");
  const [isconnect, SetIsconnect] = useState(false);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { open } = useWeb3Modal();

  useEffect(() => {
    (async () => {
      if (!isConnecting && !isDisconnected) SetIsconnect(true);
      else SetIsconnect(false);
    })();
  }, [isConnecting, isDisconnected]);
  let reAddress;
  if (address) {
    let first = address.slice(0, 9);
    let last = address.slice(-5);
    reAddress = `${first}......${last}`;
  }

  return (
    <div className="Toptabcontrol">
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div className="Tabcontrol">
          <div>
            <button
              className="tabButton"
              // onClick={leftBtn}
              style={
                activeBtn === "left"
                  ? {
                      backgroundImage: "rgb(139, 56, 228)",
                      color: "#FFFFFF",
                      borderRight: "none",
                    }
                  : {
                      background: "none",
                      color: "#BABABA",
                      borderRight: "none",
                    }
              }
            >
              BUY MUNITY
            </button>
          </div>
          <div>
            <button
              className="tabButton"
              style={
                activeBtn === "right"
                  ? {
                      background: "rgb(139, 56, 228)",
                      color: "#FFFFFF",
                      borderLeft: "none",
                    }
                  : { background: "none", color: "#BABABA", borderLeft: "none" }
              }
            >
              STAKING
            </button>
          </div>
        </div>

        {!isDisconnected && !isConnecting && (
          <div className="yourCode">
            <div
              className="codeBox"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="walletBox"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <img
                    src={walletIcon}
                    alt="wallet"
                    style={{ position: "relative" }}
                  />
                </div>
                <div className="codeGroup" style={{ display: "flex" }}>
                  <div>
                    <p>{reAddress}</p>
                  </div>

                  <div
                    className="codeBG"
                    onClick={() => {
                      const input = document.createElement("input");
                      input.value = address;
                      document.body.appendChild(input);
                      input.select();
                      document.execCommand("copy");
                      document.body.removeChild(input);
                    }}
                  >
                    <i class="bi bi-copy" style={{ position: "relative" }}></i>
                    <span class="tooltiptext">copy code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isconnect === true ? (
        <EthereumModal />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{ opacity: "20%", pointerEvents: "none" }}>
              <EthereumModal />
            </div>
            <div className="flexWalBtn">
              {isConnecting === true ? (
                <div className="conWalBtn">Connecting...</div>
              ) : isDisconnected === true ? (
                <div className="conWalBtn" onClick={() => open()}>
                  Connect Wallet
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
